import React from 'react';
import * as d3 from 'd3';

const width = 650;
const height = 400;
const margin = { top: 20, right: 5, bottom: 20, left: 35 };

class LineChart extends React.Component  {

  processData(data) {
    if (!data) {
      this.setState({ paths: [] });
      return;
    }

    // create scales
    const xScale = d3.scaleTime().range([0 + margin.left, width - margin.right])
    const yScale = d3.scaleLinear().range([height - margin.bottom, margin.top])

    // set domains on the scales
    const timeDomain = d3.extent(data, d => d.date);
    const count = d3.max(data, d => d.count);
    xScale.domain(timeDomain);
    yScale.domain([0, count]);

    // create and use line generator for high and low temperature
    const lineGenerator = d3.line().x(d => xScale(d.date))

    const path = {
      fill: '#eb6a5b',
      path: lineGenerator.y(d => yScale(d.count))(data),
    };

    this.setState({ path })
  }

  constructor(props) {
    super(props)
    this.state = {
      path: null
    }
  }
  componentDidMount() {
    this.processData(this.props.data);
  }
  render() {
    const { title } = this.props;
    const { path } = this.state;
    return (
      <div>
        {title && <h2>{ title }</h2>}
        <svg width={width} height={height}>
          {path && <path d={path.path} stroke='#ccc' strokeWidth="2" fill="none" />}
        </svg>
      </div>
    );
  }
}

export default LineChart;
