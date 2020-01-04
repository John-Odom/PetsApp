import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import '../stylesheets/landingPage.css';

class DogCard extends Component {

   handleClick = (id) => {
     this.props.history.push(`/dogs/${id}/`)
   }

   render() {
      return(
      <Card
      onClick={() => this.handleClick(this.props.dog.id)}
      >
      <img id='dogcard-image' alt='Doggo' src={this.props.dog.image} />
      <Card.Content>
        <Card.Header>{this.props.dog.name}</Card.Header>
        <Card.Meta>
            <span className='date'><b>Age:</b> {this.props.dog.age}</span> | 
            <span className='date'> <b>Breed:</b> {this.props.dog.breed}</span>
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

export default withRouter(DogCard);