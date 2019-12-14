import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import {logout, homeClick, faveClick, profClick} from '../actions/allActions'
class NavBar extends Component {

  render() {
    return (
      <Menu secondary>
        <Menu.Item
          name='home'
          onClick={()=>homeClick(this)}
        />
        <Menu.Item
          name='Favorites'
          onClick={()=>faveClick(this)}
        />
        <Menu.Item
          name='profile'
          onClick={()=>profClick(this)}
        />
        <Menu.Menu position='right'>
          {/* <Menu.Item>
            <Input icon='search' placeholder='Search...' onClick={(e)=>this.handleSearch(e)}/>
          </Menu.Item> */}
          <Menu.Item
            name='LOGOUT'
            onClick={()=>logout(this)}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}

export default withRouter(NavBar)