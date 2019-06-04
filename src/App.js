import React from 'react';
import { Button, Grid, Icon, Label, Divider, Header } from 'semantic-ui-react'

import statflixLogo from './statflix_logo.png';
import logo from './logo.svg';
import './App.css';
import DropZone from './DropZone';
import FAQ from './faq';


import {
  parseCsv,
  computeAccumulateByMonth,
} from './dataUtilities';

import sampleData from './history.csv';
import RadialChart from './charts/RadialChart';
import BarChart from './charts/BarChart';
import YearTimelineChart from './charts/YearTimelineChart';
import FirstEpisode from './components/statistics/FirstEpisode';
import SimpleStats from './components/statistics/SimpleStats';

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
        accumulateByDay
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
          accumulateByDay,
        }
      })
    }

  doSpace = (heightInPx) => <div style={{ height: `${heightInPx}px`, width: '1px' }} />
  render() {
    const {
      currentYear,
      dataLoaded,
      data,
      yearsList,
    } = this.state;

    let yearsButtons = [];

    // if (dataLoaded && yearsList) {
    //
    //   yearsButtons = yearsList.map((year, i) => (
    //     <Button basic={year === currentYear ? null : true } color='red' onClick={() => this.setState({currentYear: year})}>
    //       {year}
    //     </Button>
    //   ))
    // }
    console.log(data)
    const episodePerMonth = dataLoaded ? data.episodesPerMonth.filter(data => data.year === currentYear)[0] : null;

    return (
      <div className="App">

      <div>
        { this.doSpace(40) }
        <img src={statflixLogo}  />
        <div>
        <Label as='span' color='red'>
          beta
        </Label>
        </div>
      </div>

        {!dataLoaded &&
          <Grid columns={1}>

            <Grid.Column>
              <DropZone onComplete={this.onFileUploaded}/>
            </Grid.Column>

            <Grid.Column textAlign='left'>
              <FAQ> </FAQ>
              { this.doSpace(100) }
            </Grid.Column>

          </Grid>
        }
        {dataLoaded &&
          <Grid columns={1}>


            <Grid.Column>
              { this.doSpace(100) }
              {false && <Icon color="red" name="asterisk" />}
              <Divider inverted horizontal>
                <Header style={{ color: "red" }} as='h5'>
                  FUN FACTS
                </Header>
              </Divider>
              { this.doSpace(80) }
            </Grid.Column>

            <Grid.Column>
              { dataLoaded &&
                <FirstEpisode episode={ data.sampleData[0] }/>
              }
            </Grid.Column>

            <Grid.Column>
              { this.doSpace(50) }

            </Grid.Column>

            <Grid.Column>
              { dataLoaded &&
                data.sampleData &&
                <SimpleStats
                  headerText="Overall, you saw"
                  value={data.sampleData.length}
                  footerText="episodes"
                />
              }
            </Grid.Column>

            <Grid.Column>
              { dataLoaded &&
                data.mostActiveDay &&
                <SimpleStats
                  headerText="with a record of"
                  value={data.mostActiveDay.count}
                  footerText="in one day"
                />
              }
            </Grid.Column>

            <Grid.Column>
              { this.doSpace(100) }
              <Divider inverted horizontal>
                <Header style={{ color: "red" }} as='h5'>
                  EPISODES PER YEAR
                </Header>
              </Divider>
              { this.doSpace(40) }
            </Grid.Column>

            <Grid.Column>
              { this.doSpace(20) }
              { dataLoaded &&
                data.episodesPerYear &&
                <BarChart data={data.episodesPerYear}/>
              }
            </Grid.Column>

            <Grid.Column>
              { this.doSpace(40) }
              <Divider inverted horizontal>
                <Header style={{ color: "red" }} as='h5'>
                  SOME STATS FOR {currentYear}
                </Header>
              </Divider>
            </Grid.Column>


            <Grid.Column>
              { this.doSpace(20) }
              { dataLoaded &&
                data.episodesPerYear &&
                <YearTimelineChart
                  selectYear={(year) => this.setState({currentYear: year})}
                  selected={currentYear}
                  data={data.episodesPerYear}/>
              }
            </Grid.Column>

            <Grid.Column>
              { this.doSpace(20) }
              { dataLoaded &&
                data.accumulateByDay &&
                <h1>PLACEHOLDER</h1>

              }
            </Grid.Column>


            <Grid.Column>

              {/* dataLoaded && <div style={{ width: "100%", margin: "0 auto" }}>{ yearsButtons }</div> */}

              { dataLoaded &&
                episodePerMonth &&
                (<div>
                  <RadialChart selected={currentYear} data={episodePerMonth.data} />
                </div>
                )
              }
            </Grid.Column>

          </Grid>
        }






        {/* dataLoaded &&
          data.episodesPerMonth &&
          data.episodesPerMonth.map(accumulate => (
            <RadialChart title={`xMonth ${accumulate.year}`} data={accumulate.data} />
          ))

        */}
      </div>
    );
  }
}

export default App;
