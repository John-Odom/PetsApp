import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Container, Header} from 'semantic-ui-react'
import '../stylesheets/dogPage.css';
import DogCarousel from './imageCarousel';
import DogInfoGrid from './dogInfoGrid';

const HomepageHeading = (props,{ mobile }) => {
  if(props.chosenDog){
    return(
      <Container text>
        <Header as='p' content={props.chosenDog.name} inverted/>
        <DogCarousel />
        <DogInfoGrid />
      </Container>
    )
  } else return null 
} 

const mapStatetoProps = state => {
  return {chosenDog: state.chosenDog}
}

export default withRouter(connect(mapStatetoProps)(HomepageHeading))