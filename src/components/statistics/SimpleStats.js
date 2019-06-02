import React from 'react';
import { Statistic, Icon } from 'semantic-ui-react'

const SimpleStats = ({ headerText, value, footerText, iconClass = null }) => (
  <Statistic size="tiny" color="inverted">
      <Statistic.Label>{ headerText }</Statistic.Label>
      <Statistic.Value style={{ color: '#e43d32' }}>{ value }
        { iconClass && <Icon name={ iconClass } />}
      </Statistic.Value>
      { footerText && <Statistic.Label>{ footerText }</Statistic.Label> }
  </Statistic>
);

export default SimpleStats
