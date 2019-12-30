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
        console.log('dog', dog)
        if(this.props.chosenDog){
        return (
            <Grid.Row>
            <Grid.Column width={5}>
            <Image bordered rounded size='large' src={dog.image2} />
            </Grid.Column>
            <Grid.Column width={5}>
            <Image bordered rounded size='large' src={dog.image3 ? dog.image3 : dog.image} />
            </Grid.Column>
            <Grid.Column width={5}>
             <Image bordered rounded size='large' src={dog.image4 ? dog.image4 : dog.image} />
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