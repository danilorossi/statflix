import React from 'react';
import { List } from 'semantic-ui-react'

import './App.css';

import { parseCsv } from './services/ntflxCsvParser';

import SiteHeader from './components/SiteHeader';
import HeaderHelp from './components/HeaderHelp';
import MainScreen from './screens/MainScreen';
import StatScreen from './screens/StatScreen';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      currentYear: null,
      // yearsList: null,
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

  render() {
    const {
      currentYear,
      dataLoaded,
      data,
      yearsList,      
    } = this.state;

    return (
      <div className="App">

        <SiteHeader />

        { !dataLoaded &&
          <>
            <HeaderHelp />
            <MainScreen onFileUploaded={ this.onFileUploaded } />
          </>
        }

        { dataLoaded &&
          <StatScreen data={data} yearsList={yearsList} currentYear={currentYear} />
        }

      </div>
    );
  }
}

export default App;
