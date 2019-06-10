import React, { Component } from 'react'
import { Accordion, Icon, Segment } from 'semantic-ui-react'
// import ReactMarkdown from 'react-markdown';

import { faqText } from './faqText';

export default class FAQ extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Segment inverted style={ styles.container }>
        <Accordion inverted>
          {  
            faqText.sections.map((section, i) => (
              <React.Fragment key={`faq_${i}`}>
                <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick}>
                  <Icon name='dropdown' /> { section.title }
                </Accordion.Title>
                <Accordion.Content active={activeIndex === i}>
                  { section.body }
                  {/*<ReactMarkdown source={ section.body } />*/}
                </Accordion.Content>
              </React.Fragment>
            ))
          }
        </Accordion>
      </Segment>
    )
  }
}


const styles = {
  container: {
    paddingLeft: '10%',
    paddingRight: '10%',
    backgroundColor: 'rgb(20, 20, 20)',
    fontSize: '1.2em'
  },
};
