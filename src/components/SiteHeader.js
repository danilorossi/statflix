import React from 'react';
import statflixLogo from '../statflix_logo.png';
import { Label } from 'semantic-ui-react';

export default function SiteHeader() {
  return (
    <div>
      <img alt="Web page logo" src={statflixLogo}  />
      <div>
        <Label as='span' color='red'>BETA</Label>
      </div>
    </div>
  );
};
