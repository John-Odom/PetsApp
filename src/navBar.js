import React, { Component } from 'react';
import {logout, homeClick, profClick, orgsClick} from './actions/allActions'
import {
    Button,
    Container,
    Menu,
  } from 'semantic-ui-react'

class navBar extends Component {
    state={}
    render() {
        const { fixed } = this.state
        return (
            <Menu
                fixed={fixed ? 'top' : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size='large'
              >
                <Container id='navBar'>
                  <Menu.Item onClick={()=>homeClick(this)} as='a' active>Dogs</Menu.Item>
                  <Menu.Item onClick={()=>orgsClick(this)} as='a'>Organizations</Menu.Item>
                  <Menu.Item onClick={()=>profClick(this.props)} as='a'>Profile</Menu.Item>
                  <Menu.Item position='right'>
                    <Button onClick={()=>logout(this)} as='a' inverted={!fixed}>
                      Log Out
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
        );
    }
}

export default navBar;