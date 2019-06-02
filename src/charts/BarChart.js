import React from 'react';
import * as d3 from 'd3';

const width = 500;
const height = 150;
const margin = { top: 20, right: 20, bottom: 60, left: 20 };

class BarChart extends React.Component  {

  barsWidth = 0;

  processData(data) {
    if (!data) {
      this.setState({ bars: [] });
      return;
    }

    const extent = d3.extent(data, d => d.year);
     const xScale = d3
       .scaleBand().padding(0.2).domain(data.map(d => d.year).sort((a, b) => a.year - b.year))
       //.scaleLinear().domain(extent)
       .range([ margin.left, width - margin.right]);

     const max = d3.max(data, d => d.count);
     const yScale = d3
       .scaleLinear()
       .domain([ max, 0 ])
       .range([ height - margin.bottom, margin.top ]);

     // 3. map avg temp to color
     // get min/max of avg
     const colorExtent = d3.extent(data, d => d.count).reverse();
     const colorScale = d3
       .scaleSequential()
       .domain([colorExtent[0]*1.5, colorExtent[1]])
       .interpolator(d3.interpolateReds);


     const bars = data.map(d => {
       return {
         x: xScale(d.year),
         y: 0,//yScale(d.count),
         year: d.year,
         count: d.count,
         height: yScale(d.count),
         fill: colorScale(d.count)
       };
     });

     if(bars) {this.barsWidth = xScale.bandwidth()}//Math.floor(width / bars.length);}
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

    /*
    <polygon fill={d.fill} stroke={d.fill} points={
      `${d.x},${d.y+d.height+margin.top}
        ${d.x+(this.barsWidth/2)},${d.y+d.height+margin.top+20}
        ${d.x+this.barsWidth},${d.y+d.height+margin.top}`}  />,
    */
    const { title } = this.props;
    const { bars } = this.state;
    return (
      <div style={{ width: "100%" }}>
        {title && <h2>{ title }</h2>}
        {bars &&
        <svg width={width} height={height}>
          {this.state.bars.map(d => (
            [
              <rect x={d.x} y={d.y} width={this.barsWidth} height={d.height+margin.top} fill={d.fill} />,
              <polygon stroke-width="1" fill={d.fill} stroke={d.fill} points={
                `${d.x+1},${d.y+d.height+margin.top}
                  ${d.x+(this.barsWidth/2)},${d.y+d.height+margin.top+20}
                  ${d.x-1+this.barsWidth},${d.y+d.height+margin.top}`}  />,
              <text font-weight="bold" x={d.x + (this.barsWidth/2)} textAnchor="middle" y={d.y + 20}  fill="white">{d.year}</text>,
              <text font-weight="bold" x={d.x + (this.barsWidth/2)} y={d.y + d.height + 60} textAnchor="middle" fill={d.fill}>
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
