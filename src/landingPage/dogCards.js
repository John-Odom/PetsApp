import React, { Component } from 'react';
import DogCard from '../landingPage/dogCard' 
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { landDogs, landMoreDogs } from '../actions/reducerActions'
import { getDogs } from '../actions/fetches'

class DogCards extends Component {
   constructor() {
      super() 
      this.state = {
         start: 0,
      }
   }

   componentDidMount() {
    getDogs()
             .then((data) => this.props.landDogs(data))
    window.addEventListener('scroll', this.onScroll, false);
   }

   onPaginatedSearch = () => {
         this.setState({
            start: this.state.start + 56
         })
      }

   render() {
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
     landingDogs: state.landingDogs,
     filter: state.filter
   })
}

export default connect(mapStatetoProps, { landDogs, landMoreDogs })(DogCards);
