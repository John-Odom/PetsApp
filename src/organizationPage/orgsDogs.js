import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { landDogs } from '../actions/reducerActions'
import DogCard from '../landingPage/dogCard'

class OrgsDogs extends Component {

   render() {
      const mapDogs = this.props.chosenOrg.dogs.map((dog) => 
      <DogCard 
         key={dog.id}
         dogId={dog.id}
         dog={dog}
         />)

      return(
         <Card.Group itemsPerRow={4}>
            {mapDogs}
         </Card.Group>
      )
   }
} 

const mapStatetoProps = state => {
   return ({
     chosenOrg: state.chosenOrg
   })
}

export default connect(mapStatetoProps, { landDogs})(OrgsDogs);
