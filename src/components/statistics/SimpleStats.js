import React from 'react';
import { Statistic, Icon } from 'semantic-ui-react'
import { CUSTOM_RED } from '../../globals/colors';

const SimpleStats = ({ headerText, value, footerText, iconClass = null }) => (
  <Statistic size="tiny" color="red" inverted>
      <Statistic.Label>{ headerText }</Statistic.Label>
      <Statistic.Value style={{ color: CUSTOM_RED }}>{ value }
        { iconClass && <Icon name={ iconClass } />}
      </Statistic.Value>
      { footerText && <Statistic.Label>{ footerText }</Statistic.Label> }
  </Statistic>
);

export default SimpleStats
