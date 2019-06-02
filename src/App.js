import React from 'react';
import { Button, Grid, Icon, Label } from 'semantic-ui-react'

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
      } = parseCsv(csvString);

      this.setState({
        dataLoaded: true,
        yearsList,
        currentYear: yearsList[0],
        data: {
          sampleData,
          episodesPerMonth,
          episodesPerYear
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

    if (dataLoaded && yearsList) {

      yearsButtons = yearsList.map((year, i) => (
        <Button basic={year === currentYear ? null : true } color='red' onClick={() => this.setState({currentYear: year})}>
          {year}
        </Button>
      ))
    }
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
              <Icon color="red" name="asterisk" />
              { this.doSpace(100) }
            </Grid.Column>

            <Grid.Column>
              { dataLoaded &&
                <FirstEpisode episode={ data.sampleData[0] }/>
              }
            </Grid.Column>

            <Grid.Column>
              { this.doSpace(100) }
              <Icon color="red" name="asterisk" />
              { this.doSpace(100) }
            </Grid.Column>

            <Grid.Column>
              { dataLoaded &&
                data.sampleData &&
                <SimpleStats
                  headerText="You saw"
                  value={data.sampleData.length}
                  footerText="episodes"
                />
              }
            </Grid.Column>

            <Grid.Column>
              { this.doSpace(20) }
              { dataLoaded &&
                data.episodesPerYear &&
                <BarChart data={data.episodesPerYear}/>
              }
            </Grid.Column>


            <Grid.Column>

              { dataLoaded && <div style={{ width: "100%", margin: "0 auto" }}>{ yearsButtons }</div> }

              { this.doSpace(40) }
              { dataLoaded &&
                episodePerMonth &&
                (<div>
                  <RadialChart title={`Episodes per month in ${episodePerMonth.year}`} data={episodePerMonth.data} />
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
