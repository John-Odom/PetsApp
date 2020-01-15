import React from 'react';
import {Grid,Segment, Button} from 'semantic-ui-react'
import OrgModal from './orgModal';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {addToFavorites} from '../actions/fetches'
import {profClick} from '../actions/allActions'


const dogInfoGrid = (props) => {
    let dog = props.chosenDog
    const add = (e) => {
        addToFavorites(e, props.chosenDog)
        .then(() => profClick(props))
    }
    return(
        <Grid columns='equal' divided inverted>
        <Grid.Row color='black' >
          <Grid.Column>
            <Segment color='black' inverted>
              <p><b>Status:</b></p> {dog.status}
            </Segment>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Segment color='black'  inverted>
              <p><b>Location:</b></p> {dog.contact.address.split(", ")[2].slice(9, -1)}, {dog.contact.address.split(", ")[3].slice(10, -1)}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color='black' inverted>
              <p><b>Age:</b></p> {dog.age}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color='black' inverted>
            <p><b>Gender:</b> </p> {dog.gender ? 'male' : 'female' }
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color='black' inverted>
              <p><b>Primary Breed:</b></p> {dog.breeds.primary }
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color='black' inverted>
              <p><b>Secondary Breed:</b></p> {dog.breeds.secondary ? dog.breeds.secondary: 'N/A' }
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment color='black' inverted>
            <p><b>Size:</b> </p> {dog.size }
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Button data-id={dog.id} onClick={(e)=>add(e)}> Add To Favorites </Button>
            <OrgModal/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}
const mapStatetoProps = state => {
    return ({
      chosenDog: state.chosenDog
    })
 }

export default withRouter(connect(mapStatetoProps)(dogInfoGrid))