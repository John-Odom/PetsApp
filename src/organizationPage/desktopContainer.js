import React, { Component } from 'react';
import {
    Responsive,
    Segment,
    Visibility,
  } from 'semantic-ui-react'
  import HomepageHeading from './homePageHeading'
  import {getWidth} from '../actions/allActions'
  import { withRouter } from 'react-router-dom'
  import NavBar from '../navBar'


class DesktopContainer extends Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
  
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 500, padding: '1em 0em' }}
              vertical
            >
              <NavBar history={this.props.history}/>
              <HomepageHeading />
            </Segment>
            
          </Visibility>
          {children}
        </Responsive>
      )
    }
  }

  export default withRouter(DesktopContainer);