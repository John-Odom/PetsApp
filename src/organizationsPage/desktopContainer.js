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
  import {getOrgs, getPetFinderToken} from '../actions/fetches'
  import OrgCard from './orgCard'
  import {connect} from 'react-redux'
  import {landOrgs} from '../actions/reducerActions'



class DesktopContainer extends Component {

    findOrgs = (token) =>{
      getOrgs(token)
        .then(orgs => {
            this.props.landOrgs(orgs.organizations)
        })
    }

    componentDidMount(){
      if(this.props.apiToken){
        this.findOrgs(this.props.apiToken)
      } else {
        getPetFinderToken()
        .then( token => this.findOrgs(token.access_token))
      }
    }
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
        let mapOrgs
        if(this.props.landingOrgs){
            mapOrgs = this.props.landingOrgs.map((org) => 
            <OrgCard 
              key={org.id}
              dogId={org.id}
              org={org}
            />)
        }
      const { children } = this.props
    if(this.props.landingOrgs){
      console.log(this.props.landingOrgs)
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

  const mapStatetoProps = state => {
    return ({
      apiToken: state.apiToken,
      landingOrgs : state.landingOrgs
    })
 }


  export default withRouter( connect(mapStatetoProps,{landOrgs})(DesktopContainer));