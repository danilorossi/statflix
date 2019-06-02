import React from 'react';
import * as d3 from 'd3';

const width = 500;
const height = 100;
const margin = { top: 20, right: 35, bottom: 20, left: 35 };

class BarChart extends React.Component  {

  barsWidth = 0;

  processData(data) {
    if (!data) {
      this.setState({ bars: [] });
      return;
    }

    const extent = d3.extent(data, d => d.year);
     const xScale = d3
       .scaleTime()
       .domain(extent)
       .range([ 0, width - margin.right - margin.left ]);

     const max = d3.max(data, d => d.count);
     const yScale = d3
       .scaleLinear()
       .domain([ max, 0 ])
       .range([ height - margin.top, margin.bottom ]);

     // 3. map avg temp to color
     // get min/max of avg
     const colorExtent = d3.extent(data, d => d.count).reverse();
     const colorScale = d3
       .scaleSequential()
       .domain([colorExtent[0]*1.5, colorExtent[1]])
       .interpolator(d3.interpolateReds);

      this.barsWidth = ((width - margin.right) / data.length);

     const bars = data.map(d => {
       return {
         x: xScale(d.year),
         y: yScale(max) - yScale(d.count),
         count: d.count,
         height: yScale(d.count),
         fill: colorScale(d.count)
       };
     });

    if(bars) {this.barsWidth = Math.floor(width / bars.length);}
    this.setState({ bars })
  }

  constructor(props) {
    super(props)
    this.state = {
      bars: null
    }
  }
  componentDidMount() {
    this.processData(this.props.data);
  }

  render() {
    const { title } = this.props;
    const { bars } = this.state;
    return (
      <div style={{ width: "100%" }}>
        {title && <h2>{ title }</h2>}
        {bars &&
        <svg width={width} height={height}>
          {this.state.bars.map(d => (
            [
              <rect x={d.x} y={d.y} width={this.barsWidth} height={d.height} fill={d.fill} />,

              <text x={d.x + (this.barsWidth/2)} y={d.y - 4} textAnchor="middle" fill="white">
                {d.count}
              </text>
            ]
          ))}

        </svg>
        }
      </div>
    );
  }
}

export default BarChart;
