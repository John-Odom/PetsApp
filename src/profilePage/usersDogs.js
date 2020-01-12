import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import DogCard from '../dogsPage/dogCard'
import '../stylesheets/profilePage.css'
class UsersDogs extends Component {

   render() {
      const mapDogs = this.props.userDogs.map((dog) => 
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
     userDogs: state.userDogs
   })
}

export default connect(mapStatetoProps)(UsersDogs);
