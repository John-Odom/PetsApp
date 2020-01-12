import React, { Component } from 'react';
import { Responsive,Segment, Visibility} from 'semantic-ui-react'
import {getWidth} from '../actions/allActions'
import NavBar from '../navBar'
import {getDogs,getPetFinderToken} from '../actions/fetches'
import DogCards from './dogCards'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { setToken, landDogs } from '../actions/reducerActions'

import '../stylesheets/dogPage.css'

class DesktopContainer extends Component {
      
     componentDidMount() {
       if(!this.props.apiToken){
         getPetFinderToken().then((token) => {
           this.props.setToken(token.access_token)
           getDogs(token.access_token).then(data=>this.props.landDogs(data.animals))
        })
      } else getDogs(this.props.apiToken).then(data=>this.props.landDogs(data.animals))
     }
  
    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props

    if(this.props.landingDogs){
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
              <DogCards />
            </Segment>
          </Visibility>
  
          {children}
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