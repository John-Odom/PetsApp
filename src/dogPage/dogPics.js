import React, { Component } from 'react';
import {connect} from 'react-redux'
import {
    Grid,
    Header,
    Image
  } from 'semantic-ui-react'

class DogPics extends Component {
    render() {
        let dog=this.props.chosenDog
        if(this.props.chosenDog){
        return (
            <Grid.Row>
            <Grid.Column width={5}>
            <Image bordered rounded size='large' src={dog.photos[1] ? dog.photos[1].medium : dog.image} />
            </Grid.Column>
            <Grid.Column width={5}>
            <Image bordered rounded size='large' src={dog.photos[2] ? dog.photos[2].medium : dog.image} />
            </Grid.Column>
            <Grid.Column width={5}>
             <Image bordered rounded size='large' src={dog.photos[3] ? dog.photos[3].medium : dog.image} />
            </Grid.Column>
          </Grid.Row>
        );
        }
        else {
            return (
                    <Header as='h2'>DogPics</Header>
            );
        }
    }
}

const mapStatetoProps = state => {
   return ({
     chosenDog: state.chosenDog
   })
}

export default connect(mapStatetoProps)(DogPics);