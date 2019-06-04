import React from 'react';
import * as d3 from 'd3';

const width = 700;
const height = 100;
const margin = { top: 20, right: 20, bottom: 60, left: 20 };

class YearTimelineChart extends React.Component  {

  barsWidth = 0;

  processData(data) {

    if (!data) {
      this.setState({ circles: [] });
      return;
    }

    const extent = d3.extent(data, d => d.year);
     const xScale = d3
       .scaleBand().padding(1).domain(data.map(d => d.year).sort((a, b) => a.year - b.year))
       .range([ margin.left, width - margin.right]);

     const [minCount, maxCount] = d3.extent(data, d => d.count);
     const radiusScale = d3
      .scaleLinear()
      .range([10, 30])
      .domain([0, maxCount]);

     const colorScale = d3
      .scaleSequential(d3.interpolateReds)
      .domain([maxCount*1.5, minCount]);

     const circles = data.map(d => {
       return {
         x: xScale(d.year),
         year: d.year,
         count: d.count,
         radius: radiusScale(d.count),
         fill: colorScale(d.count)
       };
     });

     this.setState({ circles })
  }

  constructor(props) {
    super(props)
    this.state = {
      circles: null,
      selected: null
    }
  }
  onCircleClick(year) {
    this.props.selectYear(year)
  }
  componentDidMount() {
    this.processData(this.props.data);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.selected !== prevProps.selected) {
      this.processData(this.props.data);
    }
  }

  render() {

    const { circles } = this.state;
    const { selected } = this.props;

    return (
      <div style={{ width: "100%" }}>
        {circles &&
          <svg ref="svg" width={width} height={height}>
            <g transform={`translate(0, ${height / 2})`}>
              {circles.map((d, i) => (
                <g key={i} styles={{ cursor: 'pointer' }}>
                  {(selected && selected === d.year) &&
                    <circle r={d.radius + 5} cx={d.x} cy="0" fill="transparent" stroke={d.fill} strokeWidth="4"/>
                  }}
                  <circle onClick={() => this.onCircleClick(d.year)} r={d.radius} cx={d.x} cy="0" fill={d.fill} stroke={d.fill} strokeWidth="1"/>
                </g>
              ))}
            </g>
          </svg>
        }
      </div>
    );
  }
}

export default YearTimelineChart;
