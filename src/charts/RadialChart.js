import React from 'react';
import * as d3 from 'd3';

const width = 650;
const height = 400;

class RadialChart extends React.Component  {

  processData(data) {

    if (!data) {
      this.setState({ paths: [] });
      return;
    }

    const radiusScale = d3.scaleLinear().range([0, width / 4])
    const colorScale = d3.scaleSequential(d3.interpolateReds)

    const [minCount, maxCount] = d3.extent(data, d => d.count);
    radiusScale.domain([0, maxCount]);
    colorScale.domain([maxCount*1.5, minCount]);

    // one arc per day, innerRadius is low temp, outerRadius is high temp
    const arcGenerator = d3.arc()
    const perSliceAngle = (2 * Math.PI) / data.length;
    const paths = data.map((d, i) => {
      return {
        fill: colorScale(d.count),
        path: arcGenerator({
          startAngle: i * perSliceAngle,
          endAngle: (i + 1) * perSliceAngle,
          innerRadius: radiusScale(0),
          outerRadius: radiusScale(d.count),
        }),
      };
    });

    // const axesStep = Math.floor(maxCount/2)
    // const step = Math.ceil((axesStep)/10)*10;
    const tempAnnotations = [minCount, maxCount].map(temp => {
      return {
        r: radiusScale(temp),
        temp
      };
    });

    this.setState({ paths, tempAnnotations })
  }


  constructor(props) {
    super(props)
    this.state = {
      paths: [],
      tempAnnotations: [],
    }
  }
  componentDidMount() {
    this.processData(this.props.data);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.title !== prevProps.title) {
      this.processData(this.props.data);
    }
  }

  render() {
    const { title } = this.props || 'Radial Chart';
    const { paths, tempAnnotations } = this.state;
    return ([
      <h3>{title}</h3>,
      <svg ref="svg" width={width} height={height}>

        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {paths.map((d, i) => (
            <path key={i} d={d.path} stroke={d.fill} strokeWidth="2" fill={d.fill} />
          ))}

          {tempAnnotations.map((d, i) => (
            <g key={i}>
              <circle r={d.r} fill="none" stroke="#ffaaaa" strokeWidth="1"/>
              <text y={-d.r - 2} textAnchor="middle" fill="#ffaaaa">
                {d.temp}
              </text>
            </g>
          ))}
        </g>
      </svg>
    ]);
  }
}

export default RadialChart;
