import React, { Component } from 'react';
import DogCard from '../landingPage/dogCard' 
import { Card, Search } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { landDogs, landMoreDogs, filterDogs } from '../actions/reducerActions'
import { getDogs } from '../actions/fetches'


class DogCards extends Component {
   constructor() {
      super() 
      this.state = {
         start: 0,
         // loaded: false
      }
   }

   componentDidMount() {
    getDogs()
             .then((data) => {
                this.props.landDogs(data)
               // this.setState({allDogs: data})
               })
    window.addEventListener('scroll', this.onScroll, false);
   }

   onPaginatedSearch = () => {
         this.setState({
            start: this.state.start + 56
         })
      }
   getSearchValue = (value) => {
      this.setState({search: value})
      this.filterDogs(value)
   }

   filterDogs = (value) => {
      let filteredDogs = this.props.landingDogs.filter (dog => {
          return dog.name.toLowerCase().startsWith(value.toLowerCase())
      })
      console.log(filteredDogs)
      return filteredDogs
   }

   callList = () => {
      return this.props.filterDogs ? this.props.landingDogs : this.filterDogs()
  }

   render() {
      // if(this.state.allDogs){
      //    console.log('filtered dogs', this.filterDogs())
      // }
      const mapDogs = this.props.landingDogs.map((dog) => 
      <DogCard 
         key={dog.id}
         dogId={dog.id}
         dog={dog}
         />)

      return(
         <div>
            <Search onSearchChange={(e)=>this.getSearchValue(e.target.value)} 
                showNoResults={false} value={this.props.searchBar} className="searchbar"/>
                
            <Card.Group itemsPerRow={4}>
               {mapDogs}
            </Card.Group>
         </div>
         
      )
   }
} 

const mapStatetoProps = state => {
   return ({
     landingDogs: state.landingDogs,
     filter: state.filter
   })
}

export default connect(mapStatetoProps, { landDogs, landMoreDogs, filterDogs })(DogCards);
