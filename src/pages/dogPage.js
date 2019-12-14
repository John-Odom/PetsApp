import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import '../stylesheets/moviePage.css';
import DogBar from '../dogPage/dogBar';
// import MovieInfo from '../moviePage/movieInfo';
// import Sources from '../moviePage/sources';
// import Trailer from '../moviePage/trailer';
// import MovieCast from '../moviePage/movieCast';
import { Container, Divider, Grid } from 'semantic-ui-react';
import NavBar from '../dogPage/dogPageNavBar'
import {findDog} from '../actions/fetches';
import {clickDog} from '../actions/reducerActions';
import { connect } from 'react-redux';


class DogPage extends Component {

    // componentDidMount() {
    //     findDog()
    //     .then( dog =>{
    //         this.props.clickDog()
    //     })
    // }
    componentDidMount () {
        const dogId = this.props.match.params.id

        findDog(dogId)
        .then((dog) => {this.props.clickDog(dog)})
      }

   render() {
      return(
         <div id="movie-background">
            <NavBar />
            <Container id='movie-pg-container'>
               <DogBar />
               <Divider />
               <Grid columns={2} >
                  {/* <MovieInfo />
                  <Sources />
                  <Trailer />
                  <MovieCast /> */}
               </Grid>
            </Container>
         </div>
      )
   }
} 

export default withRouter(connect(null, {clickDog} )(DogPage));