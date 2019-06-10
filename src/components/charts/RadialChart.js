import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

const width = 400;
const height = 200;

export default function RadialChart({ selected, data }) {

  const processData = (data) => {
    if (!data) {
      return {
        paths: [],
        tempAnnotations: []
      }
    }

    const radiusScale = d3.scaleLinear().range([0, 100])
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
    return { paths, tempAnnotations };
  }

  const [paths, setPaths] = useState([]);
  const [tempAnnotations, setTempAnnotations] = useState([]);

  useEffect(() => {
    const { paths, tempAnnotations } = processData(data);
    setPaths(paths);
    setTempAnnotations(tempAnnotations);
  }, [ data, selected ]);

  return (
    <svg width={width} height={height}>
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
  );
}
