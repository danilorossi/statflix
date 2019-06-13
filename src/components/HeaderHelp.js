import React from 'react';
import { List } from 'semantic-ui-react';

export default function HeaderHelp() {
  return (
    <div style={{ padding: '10% 10% 0 10%', color: 'white', textAlign: 'left' }}>
    <List bulleted>
      <List.Item>Login on <a target="_blank" href="https://netflix.com">Netflix</a> website and select a profile </List.Item>
      <List.Item>Visit <a target="_blank" href="https://netflix.com/viewingactivity">netflix.com/viewingactivity</a></List.Item>
      <List.Item>At the bottom of the activity page, click on the <b>"Download all"</b> link</List.Item>
    </List>
    <br/>
    You should obtain a file, <b>"NetflixViewingHistory.csv"</b> : drag it on the box below, or click on the box to select it from your file system.
    </div>
  );
};
