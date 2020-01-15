import React, { Component } from 'react';
import {
    Responsive,
    Segment,
    Visibility,
  } from 'semantic-ui-react'
  import HomepageHeading from './dogPageHeading'
  import {getWidth} from '../actions/allActions'
  import { withRouter } from 'react-router-dom'
  import NavBar from '../navBar'
  import {connect} from 'react-redux'


class DogPageContainer extends Component {
  
    render() {
      if(this.props.chosenDog){
      return (
        <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility>
            <Segment className='dog-page-container' inverted vertical>
              <NavBar history={this.props.history}/>
              <HomepageHeading />
            </Segment>
          </Visibility>
        </Responsive>
      )} else return null;
    }
  }
  const mapStatetoProps = state => {
    return {chosenDog: state.chosenDog}
 }

  export default withRouter(connect(mapStatetoProps)(DogPageContainer));