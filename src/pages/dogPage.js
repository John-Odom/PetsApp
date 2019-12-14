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
import { connect } from 'react-redux';


class DogPage extends Component {
    state={
        dog:""
    }

    componentDidMount() {
        findDog()
        .then( dog =>{
            this.props.clickDog
        })
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