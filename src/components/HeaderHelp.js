import React from 'react';
import { List, Popup } from 'semantic-ui-react';
import netflixActivityPage from '../assets/netflix_activity_page.png';
import netflixActivityDownload from '../assets/netflix_activity_download.png';
import netflixFile from '../assets/netflix_file.png';

export default function HeaderHelp() {
  return (
    <div style={{ padding: '10% 10% 0 10%', color: 'white', textAlign: 'left' }}>
    <List bulleted>
      <List.Item>Visit
        <Popup inverted
          position='bottom center'
          trigger={
            <a target="_blank" href="https://netflix.com/viewingactivity"> Netflix viewing activity page </a>
          }
        >
          <Popup.Header>
            https://netflix.com/viewingactivity
          </Popup.Header>
          <Popup.Content>
            <img alt="" style={{ width: '500px' }} src={ netflixActivityPage } />
          </Popup.Content>
        </Popup>
         - you will have to login on Netflix first, and select a profile
      </List.Item>

      <List.Item>At the bottom of the activity page, click on the
        <Popup inverted
          position='bottom center'
          trigger={
            <a target="_blank" href="https://netflix.com/viewingactivity"> download all </a>
          }
        >
          <Popup.Header>
            Download activity file
          </Popup.Header>
          <Popup.Content>
            <img alt="" style={{ width: '500px' }} src={ netflixActivityDownload } />
          </Popup.Content>
        </Popup>
        link
      </List.Item>

      <List.Item>
      Locate the downloaded file,
        <Popup inverted
          position='bottom center'
          trigger={
            <i> NetflixViewingHistory.csv</i>
          }
        >
          <Popup.Content>
            <img alt="" style={{  }} src={ netflixFile } />
          </Popup.Content>
        </Popup>

      , and drag&drop it on the box below - or click on the box to select it from your file system.
      </List.Item>
    </List>

    </div>
  );
};
