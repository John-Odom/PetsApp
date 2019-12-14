import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

class MovieBar extends Component {
   render() {
    //   const genres = this.props.chosenDog.genres.map(g => g.title).join(', ')
    const dog=this.props.chosenDog
      return(
         <Container id='dog-page-header'>
            <Header id='dog-name-header'>{dog.name} ({dog.breed})</Header>
            <Header id='sub-header'> {dog.age} | {}</Header> 
         </Container> 
      )
   }
} 

const mapStatetoProps = state => {
   return ({
     chosenDog: state.chosenDog
   })
}

export default connect(mapStatetoProps)(MovieBar);