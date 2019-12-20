import React, { Component } from 'react';
import {
    Button,
    Container,
    Menu,
    Responsive,
    Segment,
    Visibility,
  } from 'semantic-ui-react'
  import HomepageHeading from './homePageHeading'
  import {getWidth} from '../actions/allActions'
  import {logout, homeClick, faveClick, profClick} from '../actions/allActions'
  import { withRouter } from 'react-router-dom'


class DesktopContainer extends Component {
    state = {}
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      const { fixed } = this.state
  
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
              style={{ minHeight: 700, padding: '1em 0em' }}
              vertical
            >
              <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container>
                  <Menu.Item onClick={()=>homeClick(this)} as='a' active>
                    Home
                  </Menu.Item>
                  <Menu.Item onClick={()=>faveClick(this)} as='a'>Favorites</Menu.Item>
                  <Menu.Item onClick={()=>profClick(this)} as='a'>Profile</Menu.Item>
                  <Menu.Item position='right'>
                    <Button onClick={()=>logout(this)} as='a' inverted={!fixed}>
                      Log Out
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
              <HomepageHeading />
            </Segment>
          </Visibility>
  
          {children}
        </Responsive>
      )
    }
  }

  export default withRouter(DesktopContainer);