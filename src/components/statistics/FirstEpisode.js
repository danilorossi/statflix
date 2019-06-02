import React, { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

import SimpleStats from './SimpleStats';

// TODO use lib
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const FirstEpisodeStatistics = ({ episode }) => {

  const [ timeAgo, setTimeAgo ] = useState(null);
  const [ dayOfWeek, setDayOfWeek ] = useState(null);

  useEffect(() => {
    // Add locale-specific relative date/time formatting rules.
    TimeAgo.addLocale(en)
    // Create relative date/time formatter.
    const timeAgo = new TimeAgo('en-US')
    setTimeAgo(timeAgo.format(episode.date));
    setDayOfWeek(days[episode.date.getDay()])
  }, []);
  return (

    <div>
      <div>
        <div>
          <Icon size="big" color="red" name="tv" />
        </div>
        <SimpleStats
          headerText="your first episode EVER is"
          value={ episode.title }
        />
        </div>
        <br/>
        <br/>
        <div>
          <div>
            <Icon size="big" color="red" name="hourglass outline" />
          </div>

        <SimpleStats
          headerText="and you saw it"
          value={ timeAgo }
          footerText={`(it was ${dayOfWeek})`}
        />
      </div>
    </div>);
}

export default FirstEpisodeStatistics
