import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import '../stylesheets/dogsPage.css';
import noPhoto from '../images/noPhoto.png'
import {postDog} from '../actions/fetches'
import {connect} from 'react-redux'
import {clickDog} from '../actions/reducerActions'

class DogCard extends Component {

   handleClick = (dog) => {
     postDog(dog)
     .then(data=> {
      this.props.clickDog(dog)
       this.props.history.push(`/dogs/${data.id}/`)
      })
   }

   render() {
      return(
      <Card
      onClick={() => this.handleClick(this.props.dog)}
      >
      <img id='dogcard-image' alt='Doggo' src={this.props.dog.photos[0] ? this.props.dog.photos[0].medium :noPhoto} />
      <Card.Content>
        <Card.Header>{this.props.dog.name}</Card.Header>
        <Card.Meta>
            <span className='date'><b>Age:</b> {this.props.dog.age}</span> | 
            <span className='date'> <b>Breed:</b> {this.props.dog.breeds.primary}</span>
        </Card.Meta>
        <Card.Description>
          {this.props.dog.bio}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Icon name='user' />
          Location: {this.props.dog.contact.address.city}
      </Card.Content>
    </Card>
      )
   }
} 


export default withRouter(connect(null, {clickDog})(DogCard));