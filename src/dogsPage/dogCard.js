import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { clickDog } from '../actions/reducerActions'
// import { findDog } from '../actions/fetches'
import '../stylesheets/landingPage.css';


class DogCard extends Component {

   handleClick = (id) => {
     this.props.history.push(`/dogs/${id}/`)
   }

   render() {
      return(
    //   <Card 
    //      onClick={() => this.handleClick(this.props.movieId)}
    //      id='movie-card'
    //      >
    //      <Image src={this.props.dog.image} alt="no Image Available"/>
    //   </Card>
      <Card
      onClick={() => this.handleClick(this.props.dogId)}
        //  id='dog-card'
      >
      <img id='dogcard-image' alt='Doggo' src={this.props.dog.image} 
      // size='medium' 
      />
      <Card.Content>
        <Card.Header>{this.props.dog.name}</Card.Header>
        <Card.Meta>
          <span className='date'>Age: {this.props.dog.age}</span>
        </Card.Meta>
        <Card.Description>
          {this.props.dog.bio}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Icon name='user' />
          Location: {this.props.dog.location}
      </Card.Content>
    </Card>
      )
   }
} 

// const mapStatetoProps = state => {
// //    return ({
// //      movieInfo: state.movieInfo
// //    })
// }

// export default DogCard
export default withRouter(connect(null, {clickDog})(DogCard));

   

