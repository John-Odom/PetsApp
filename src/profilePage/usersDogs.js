import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { landDogs } from '../actions/reducerActions'
import DogCard from '../dogsPage/dogCard'

class UsersDogs extends Component {

   render() {
    //    console.log(this.props.currentUser.user.dogs)
      const mapDogs = this.props.landingDogs.map((dog) => 
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
     currentUser: state.currentUser,
     landingDogs: state.landingDogs
   })
}

export default connect(mapStatetoProps, { landDogs})(UsersDogs);
