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
  import {setOrg, setToken} from '../actions/reducerActions'



class DogPageContainer extends Component {
    state = {}
  
    findDog = (token) =>{
      fetchOrg(this.props.chosenDog.organization_id, token)
      .then(data => this.props.setOrg(data.organization))
    }

    componentDidMount() {
        if(this.props.apiToken){
          this.findDog(this.props.apiToken)
        }
        else {
            getPetFinderToken()
            .then( token => {
              this.props.setToken(token.access_token)
              this.findDog(token.access_token)
            })
        }
    }

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })
  
    render() {
      const { children } = this.props
      if(this.props.chosenDog){
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
      )} else return null;
    }
  }
  const mapStatetoProps = state => {
    return ({
      chosenDog: state.chosenDog,
      apiToken: state.apiToken
    })
 }

  export default withRouter(connect(mapStatetoProps, {setOrg, setToken})(DogPageContainer));