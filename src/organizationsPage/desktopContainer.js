import React, { Component } from 'react';
import {
    Responsive,
    Segment,
    Visibility,
    Card
  } from 'semantic-ui-react'
  import {getWidth} from '../actions/allActions'
  import { withRouter } from 'react-router-dom'
  import NavBar from '../navBar'
  import {getOrgs} from '../actions/fetches'
  import OrgCard from './orgCard'


class DesktopContainer extends Component {
    state = {
        orgs : null
    }

    componentDidMount(){
        getOrgs()
        .then(orgs => {
            this.setState({orgs})
        })
    }
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
        let mapOrgs
        if(this.state.orgs){
            mapOrgs = this.state.orgs.map((org) => 
            <OrgCard 
              key={org.id}
              dogId={org.id}
              org={org}
            />)}
  

      const { children } = this.props
    if(this.state.orgs){
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
              style={{ minHeight: 1000, padding: '1em 0em' }}
              vertical
            >
              <NavBar history={this.props.history}/>
              <Card.Group itemsPerRow={4}>
                {mapOrgs ? mapOrgs : null}
              </Card.Group>
            </Segment>
          </Visibility>
  
          {children}
        </Responsive>
      )
    } else{
        return null
    }
    }
  }

  export default withRouter(DesktopContainer);