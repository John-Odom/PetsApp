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
  import { fetchOrg, getPetFinderToken } from '../actions/fetches'
  import {connect} from 'react-redux'


class DesktopContainer extends Component {
    state = {}
  
    componentDidMount() {
        if(this.props.apiToken){
        fetchOrg(this.props.chosenDog.api_org_id, this.props.apiToken)
        .then(data => {
            console.log('got response', data)
        })}
        else {
            getPetFinderToken()
            .then( token =>{
                fetchOrg(this.props.chosenDog.api_org_id, token.access_token)
                .then(data => {
                    console.log('got response', data)
                })
            })
        }
    }

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
              style={{ minHeight: 700, padding: '1em 0em' }}
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
  const mapStatetoProps = state => {
    return ({
      chosenDog: state.chosenDog,
      apiToken: state.apiToken
    })
 }

  export default withRouter(connect(mapStatetoProps)(DesktopContainer));