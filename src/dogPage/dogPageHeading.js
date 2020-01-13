import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
    Container,
    Grid,
    Segment,
    Header,
    Button
  } from 'semantic-ui-react'
  import {addToFavorites} from '../actions/fetches'
  import {profClick} from '../actions/allActions'
  import '../stylesheets/dogPage.css';
import OrgModal from './orgModal';
import DogCarousel from './imageCarousel';

  

const HomepageHeading = (props,{ mobile }) => {
  const add = (e) => {
    addToFavorites(e, props.chosenDog)
    .then((data) => {
    profClick(props)
  })
  }
  let dog = props.chosenDog
  if(props.chosenDog){
    console.log(dog.contact.address.split(", ")[2].slice(9, -1))
    return(
    <Container text>
      <Header
        as='h1'
        content={dog.name }
        inverted
        style={{
          // fontSize: mobile ? '1em' : '2em',
          // fontWeight: 'normal',
          marginTop: mobile ? '.75em' : '1.5em',
        }}
      />
      <DogCarousel />
      <Grid columns='equal' divided inverted padded>
      <Grid.Row color='black' textAlign='center'>
        <Grid.Column>
          <Segment color='black' inverted>
            <p><b>Status:</b></p> {dog.status}
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color='black' inverted>
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
            <p><b>Primary Breed:</b></p> {dog.breeds.primary }
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
        <Button data-id={dog.id } 
        onClick={(e)=>add(e)}>
          Add To Favorites
        </Button>
        <OrgModal 
        //get Org Info from API DB
        //Render Org info to screen
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
    </Container>
  )} else return null } 

  const mapStatetoProps = state => {
    return ({
      chosenDog: state.chosenDog
    })
 }


  export default withRouter(connect(mapStatetoProps)(HomepageHeading))