import React from 'react';
import { Grid, Divider, Header } from 'semantic-ui-react'

import './App.css';

import { CUSTOM_RED } from './globals/colors';
import SiteHeader from './components/SiteHeader';
import DropZone from './components/DropZone';
import FAQ from './components/FAQ/FAQ';

import { parseCsv } from './services/ntflxCsvParser';

import RadialChart from './components/charts/RadialChart';
import BarChart from './components/charts/BarChart';
import CalendarChart from './components/charts/CalendarChart';
import YearTimelineChart from './components/charts/YearTimelineChart';
import FirstEpisode from './components/statistics/FirstEpisode';
import SimpleStats from './components/statistics/SimpleStats';


// TODO this is duplicated in FirstEpisode compnent
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      currentYear: null,
      yearsList: null,
      data: null // remove
    };
  }

  onFileUploaded = (csvString) => {

      const {
        sampleData,
        yearsList,
        episodesPerMonth,
        episodesPerYear,
        mostActiveDay,
        accumulateByDayDictionary,
        accumulateByWeekDay,
      } = parseCsv(csvString);

      this.setState({
        dataLoaded: true,
        yearsList,
        currentYear: yearsList[0],
        data: {
          sampleData,
          episodesPerMonth,
          episodesPerYear,
          mostActiveDay,
          accumulateByDayDictionary,
          accumulateByWeekDay,
        }
      })
    }

  doSpace = (heightInPx) => <div style={{ height: `${heightInPx}px`, width: '1px' }} />
  render() {
    const {
      currentYear,
      dataLoaded,
      data,
      // yearsList,
    } = this.state;

    const episodePerMonth = dataLoaded ? data.episodesPerMonth.filter(data => data.year === currentYear)[0] : null;

    return (
      <div className="App">

        <SiteHeader />

        { !dataLoaded &&
          <Grid columns={1}>

            <Grid.Column>
              <DropZone onComplete={this.onFileUploaded}/>
            </Grid.Column>

            <Grid.Column textAlign='left'>
              <FAQ> </FAQ>
            </Grid.Column>

          </Grid>
        }

        { dataLoaded &&
          <Grid columns={1}>

            <Grid.Column>

              <Divider inverted horizontal>
                <Header style={{ color:  CUSTOM_RED }} as='h5'>
                  YOUR FIRST TIME
                </Header>
              </Divider>

              <FirstEpisode episode={ data.sampleData[0] }/>

            </Grid.Column>

            <Grid.Column>

              <Divider inverted horizontal>
                <Header style={{ color:  CUSTOM_RED }} as='h5'>
                  FUN FACTS
                </Header>
              </Divider>

              { data.sampleData &&
                <SimpleStats
                  headerText="Overall, you saw"
                  value={data.sampleData.length}
                  footerText="episodes"
                />
              }


              { data.accumulateByWeekDay &&
                <SimpleStats
                  headerText="Mostly on"
                  value={`${days[data.accumulateByWeekDay[0].weekDay]}s` }
                  footerText={`(and ${days[data.accumulateByWeekDay[1].weekDay]}s)` }
                />
              }

              { data.mostActiveDay &&
                <SimpleStats
                  headerText="with a record of"
                  value={data.mostActiveDay.count}
                  footerText="in one day"
                />
              }
            </Grid.Column>

            <Grid.Column>
              <Divider inverted horizontal>
                <Header style={{ color:  CUSTOM_RED }} as='h5'>
                  EPISODES PER YEAR
                </Header>
              </Divider>

              { data.episodesPerYear &&
                <BarChart data={data.episodesPerYear}/>
              }
            </Grid.Column>

            <Grid.Column>

              <Divider inverted horizontal>
                <Header style={{ color: CUSTOM_RED }} as='h5'>
                  SOME STATS FOR {currentYear}
                </Header>
              </Divider>

              { data.episodesPerYear &&
                <YearTimelineChart
                  selectYear={(year) => this.setState({currentYear: year})}
                  selected={currentYear}
                  data={data.episodesPerYear}/>
              }

              { currentYear && episodePerMonth && episodePerMonth.data &&
                (<div>
                  <RadialChart selected={currentYear} data={episodePerMonth.data} />
                </div>
                )
              }
            </Grid.Column>

            <Grid.Column>
              { data.episodesPerMonth && data.accumulateByDayDictionary &&
                <CalendarChart selected={currentYear} data={data.episodesPerMonth} accByDate={data.accumulateByDayDictionary}/>
              }
            </Grid.Column>


          </Grid>
        }

      </div>
    );
  }
}

export default App;
