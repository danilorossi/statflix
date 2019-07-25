import React from 'react';
import * as d3 from 'd3';


import { Popup, List, Icon, Label, Divider } from 'semantic-ui-react'

// const width = 650;
// const height = 400;
// const margin = { top: 20, right: 5, bottom: 20, left: 35 };

const cellMargin = 2,
    cellSize = 20;
const monthName = d3.timeFormat("%B")
var day = d3.timeFormat("%u"),
    week = d3.timeFormat("%W");
    // format = d3.timeFormat("%Y-%m-%d"),
    // titleFormat = d3.utcFormat("%a, %d-%b");

class CalendarChart extends React.Component  {

  colorScale = null;

  processData(data, accumulateByDayDictionary, selected) {
    if (!data) {
      this.setState({ months: [] });
      return;
    }
    const yearData = data.filter(d => d.year === selected)[0].data;

    // { data: [{month, entries}], year: 2015 }

    // this.props.accByDate
    /*
    count: 2
    date: Tue May 28 2019 00:00:00 GMT+0200 (Central European Summer Time) {}
    day: 28
    items: (2) [{…}, {…}]
    month: 5
    weekDay: 2
    year: 2019
    */

    const yearEntries = yearData.reduce((acc, curr) => {
      return acc.concat(curr.entries);
    }, []);
    //
    //const [minCount, maxCount] = d3.extent(yearEntries, d => d.count);
    this.colorScale = d3
     .scaleSequential(d3.interpolateReds)
     .domain([10, 0]);

    var minDate = d3.min(yearEntries, d => d.date)
    var maxDate = d3.max(yearEntries, d => d.date)





    var months = d3.timeMonth.range(d3.timeMonth.floor(minDate), maxDate);
    this.setState({ months, days: yearData, accumulateByDayDictionary })
  }

  constructor(props) {
    super(props)
    this.state = {
      months: null,
      days: null
    }
  }
  componentDidMount() {
    this.processData(this.props.data, this.props.accByDate, this.props.selected);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.selected !== prevProps.selected) {
      this.processData(this.props.data, this.props.accByDate, this.props.selected);
    }
  }

  weeksInMonth = function(month){
    var m = d3.timeMonth.floor(month)
    return d3.timeWeeks(d3.timeWeek.floor(m), d3.timeMonth.offset(m,1)).length;
  }
  getMonthWidth = (month) => {
   var columns = this.weeksInMonth(month);
   return ((cellSize * columns) + (cellMargin * (columns + 1)));
  }
  getTextX = (month) => {
    var columns = this.weeksInMonth(month);
    return (((cellSize * columns) + (cellMargin * (columns + 1))) / 2);
  }
  render() {
    const { months, days, accumulateByDayDictionary } = this.state;
    return (
      <div id="calendar" style={{ padding: '0 10%' }}>
        {
          months && months.map((m, idx) => {
            const width = this.getMonthWidth(m);
            const monthDate = days[idx].date
            const all = d3.timeDays(new Date(monthDate.getFullYear(), monthDate.getMonth(), 1), new Date(monthDate.getFullYear(), monthDate.getMonth()+1, 1));

            return (
              <svg className="month"
                key={idx}
                style={{margin:"10px"}}
                stroke="red"
                width={width} height={((cellSize * 7) + (cellMargin * 8) + 20)}
                >
                <g>
                  <text
                    textAnchor="middle"
                    className="month-name"
                    fill="white"
                    data-month={m}
                    x={this.getTextX(m)}
                    y={/*(cellSize * 7) + (cellMargin * 8) +*/ 15}> {monthName(m)} </text>

                    {all.map((d, j) => {

                        const x = (((week(d) - week(new Date(d.getFullYear(),d.getMonth(),1))) * cellSize) + ((week(d) - week(new Date(d.getFullYear(),d.getMonth(),1))) * cellMargin) + cellMargin );
                        const y = ((day(d) * cellSize) + (day(d) * cellMargin) + cellMargin)
                        const rect = <rect className="day"
                            key={'p'+j}
                            y={y}
                            x={x}
                            title={d}
                            width={cellSize}
                            height={cellSize}
                            strokeWidth="2"
                            stroke="transparent"
                            rx="3" ry="3" fill="#333" />;

                        return rect;

                      }
                    )}


                    {true && days[idx].entries.map((d, k) => {

                        const key = `${d.day}-${d.month}-${d.year}`;

                        const x = (((week(d.date) - week(new Date(d.date.getFullYear(),d.date.getMonth(),1))) * cellSize) + ((week(d.date) - week(new Date(d.date.getFullYear(),d.date.getMonth(),1))) * cellMargin) + cellMargin );
                        const y = ((day(d.date) * cellSize) + (day(d.date) * cellMargin) + cellMargin)
                        const { count, date, items } = accumulateByDayDictionary[key];
                        const rect = <rect className="day"
                            key={'k'+k}
                            y={y}
                            x={x}
                            width={cellSize}
                            height={cellSize}
                            strokeWidth="2"
                            stroke="transparent"
                            rx="3" ry="3"
                            fill={this.colorScale(count)}
                           />;

                        return (
                          <Popup trigger={rect} flowing style={{ maxWidth: '300px'}}>
                          <Popup.Header>
                            <Icon name='calendar' /> { date.toDateString() }
                            <Label circular big color='red' floating>{ count }</Label>
                            <Divider />
                          </Popup.Header>

                          <Popup.Content>

                            <List bulleted style={{ textAlign: 'left' }}>
                              {items.map(d => (
                                <List.Item>{d.title}</List.Item>
                              ))}

                            </List>

                          </Popup.Content>
                          </Popup>
                        )

                      }
                    )}

                </g>
              </svg>);
          })

      }
      </div>
    );
  }
}

export default CalendarChart;


// {
//   months && months.map(m => {
//     const width = this.getMonthWidth(m);
//     return (<svg className="month" width={width} height={((cellSize * 7) + (cellMargin * 8) + 20)}>
//       <g>
//         <text
//           textAnchor="middle"
//           className="month-name"
//           fill="white"
//           x={this.getTextX(m)}
//           y={(cellSize * 7) + (cellMargin * 8) + 15}> {monthName(m)} </text>
//           {[1, 2, 3, 4, 5].map((d, i) => (
//             <rect className="day"
//               y={cellSize*i}
//               x={cellSize*i}
//               width={cellSize}
//               height={cellSize}
//               rx="3" ry="3" fill="#333" />
//           ))}
//           {/*days & days.map((d, i) => {
//             // const y = (d.day * cellSize) + (d.day * cellMargin) + cellMargin;
//             // const x = ((week(d.date) - week(d.date)) * cellSize) + ((week(d.date) - week(d.date)) * cellMargin) + cellMargin;
//             return (<rect className="day"
//               y={cellSize*i}
//               x={cellSize*i}
//               width={cellSize}
//               height={cellSize}
//               rx="3" ry="3" fill="#eaeaea" />)
//           })*/}
//         }
