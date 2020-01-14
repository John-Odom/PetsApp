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
      this.props.clickDog(data)
       this.props.history.push(`/dogs/${data.id}/`)
      })
   }

   render() {
     let dog=this.props.dog
     const locate = () =>{
       if(dog.attributes){
       return(`${dog.contact.address.city}, ${dog.contact.address.state}`)
       } else {
        return (`${dog.contact.address.split(", ")[2].slice(9, -1)}, ${dog.contact.address.split(", ")[3].slice(10, -1)}`)
       }
     }
    return(
      <Card onClick={() => this.handleClick(dog)}> 
        <img id='dogcard-image' alt='Doggo' src={dog.photos[0] ? dog.photos[0].medium :noPhoto} />
        <Card.Content>
          <Card.Header>{dog.name}</Card.Header>
          <Card.Meta>
              <span className='date'><b>Age:</b> {dog.age}</span> | 
              <span className='date'> <b>Breed:</b> {dog.breeds.primary}</span>
          </Card.Meta>
          <Card.Description>
            {dog.bio}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Icon name='user' />
            Location: <b>{locate()}</b>
        </Card.Content>
      </Card>
    )
  }
} 


export default withRouter(connect(null, {clickDog})(DogCard));