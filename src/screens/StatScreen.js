import React, { useState, useEffect } from 'react';
import { Grid } from 'semantic-ui-react'

import HorizontalDivider from '../components/HorizontalDivider';
import RadialChart from '../components/charts/RadialChart';
import BarChart from '../components/charts/BarChart';
import CalendarChart from '../components/charts/CalendarChart';
import YearTimelineChart from '../components/charts/YearTimelineChart';
import FirstEpisode from '../components/statistics/FirstEpisode';
import SimpleStats from '../components/statistics/SimpleStats';


// TODO this is duplicated in FirstEpisode compnent
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function StatScreen({ data, currentYear }) {

  const [episodePerMonth, setEpisodePerMonth] = useState(null);
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(currentYear)
    setEpisodePerMonth(data.episodesPerMonth.filter(data => data.year === currentYear)[0]);
  }, [ data, currentYear ]);

  return (
    <Grid columns={1}>


      <Grid.Column>
        <HorizontalDivider text="YOUR FIRST TIME" />
      </Grid.Column>

      <Grid.Column>
        <FirstEpisode episode={ data.sampleData[0] }/>
      </Grid.Column>

      <Grid.Column>
        <HorizontalDivider text="FUN FACTS" />
      </Grid.Column>


      <Grid.Column>

        { (data.sampleData) &&
          <SimpleStats
            headerText="Overall, you saw"
            value={data.sampleData.length}
            footerText="episodes"
          />
        }

        { (data.accumulateByWeekDay) &&
          <SimpleStats
            headerText="Mostly on"
            value={`${days[data.accumulateByWeekDay[0].weekDay]}s` }
            footerText={`(and ${days[data.accumulateByWeekDay[1].weekDay]}s)` }
          />
        }

        { (data.mostActiveDay) &&
          <SimpleStats
            headerText="with a record of"
            value={data.mostActiveDay.count}
            footerText="in one day"
          />
        }

      </Grid.Column>

      <Grid.Column>
        <HorizontalDivider text="EPISODES PER YEAR" />
      </Grid.Column>


      <Grid.Column>

        { (data.episodesPerYear) &&
          <BarChart
            data={data.episodesPerYear}
          />
        }
      </Grid.Column>

      <Grid.Column>
        <HorizontalDivider text={`SOME STATS FOR ${year}`} />
      </Grid.Column>


      <Grid.Column>

        { (data.episodesPerYear) &&
          <YearTimelineChart
            selectYear={(nextSelectedYear) => setYear(nextSelectedYear)}
            selected={year}
            data={data.episodesPerYear}
          />
        }

        { (year && episodePerMonth && episodePerMonth.data) &&
          <RadialChart
            selected={year}
            data={episodePerMonth.data}
          />
        }
      </Grid.Column>

      <Grid.Column>
        { (year && data.episodesPerMonth && data.accumulateByDayDictionary) &&
          <CalendarChart
            selected={year}
            data={data.episodesPerMonth}
            accByDate={data.accumulateByDayDictionary}
          />
        }
      </Grid.Column>


    </Grid>
  );
};
