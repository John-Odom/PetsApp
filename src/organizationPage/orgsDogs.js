import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { landDogs } from '../actions/reducerActions'
import DogCard from '../dogsPage/dogCard'
import {orgsDogs, getPetFinderToken, getOrg} from '../actions/fetches'
import { access } from 'fs';


class OrgsDogs extends Component {
   state={
      dogs:[]
   }


   componentDidMount() {
      if(this.props.apiToken){
         orgsDogs(this.props.chosenOrg._links.animals.href, this.props.apiToken)
         .then(data=> {this.setState({dogs:data.animals})})

      } 
      // else{
      //    getPetFinderToken()
      //    .then(token =>{
      //       getOrg(id, token.access_token)
      //    })
      // }
      // orgsDogs().then(data=>{console.log(data)})
   }

   render() {
      // console.log(this.props.chosenOrg._links.animals.href)
      const mapDogs = this.state.dogs.map((dog) => 
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
     chosenOrg: state.chosenOrg,
     apiToken: state.apiToken
   })
}

export default connect(mapStatetoProps, { landDogs})(OrgsDogs);
