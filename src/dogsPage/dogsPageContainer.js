import React, { Component } from 'react';
import { Responsive,Segment, Visibility} from 'semantic-ui-react'
import {getWidth} from '../actions/allActions'
import NavBar from '../navBar'
import {getDogs,getPetFinderToken} from '../actions/fetches'
import DogCards from './dogCards'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { setToken, landDogs } from '../actions/reducerActions'
import DogsPageHeader from './dogsPageHeader'
import '../stylesheets/dogPage.css'

class DesktopContainer extends Component {
      
  componentDidMount() {
    if(!this.props.landingDogs.length>0){
      if(!this.props.apiToken){
        getPetFinderToken().then((token) => {
          this.props.setToken(token.access_token)
          getDogs(token.access_token).then(data=>this.props.landDogs(data.animals))
        })
      } else getDogs(this.props.apiToken).then(data=>this.props.landDogs(data.animals))
    }
  }
  
  render() {
    if(this.props.landingDogs){
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility>
            <Segment inverted textAlign='center' vertical>
              <NavBar history={this.props.history}/>
              <DogsPageHeader />
              <DogCards />
            </Segment>
          </Visibility>
        </Responsive>
      )
    } else return null
  }
}

  const mapStatetoProps = state => {
    return ({
      landingDogs: state.landingDogs,
      apiToken: state.apiToken
    })
  }

  export default withRouter(connect(mapStatetoProps, { setToken, landDogs })(DesktopContainer));