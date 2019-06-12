import React from 'react';
import { CUSTOM_RED } from '../globals/colors';
import { Divider, Header } from 'semantic-ui-react';

export default function HorizontalDivider({ text }) {
  return (
    <Divider horizontal inverted>
      {text && <Header style={{ color:  CUSTOM_RED }} as='h5'>{ text }</Header>}
    </Divider>
  );
};
