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
import noPhoto from '../images/noDogPic.gif';

  
  
const HomepageHeading = (props,{ mobile }) => {
  const add = (e) => {
    addToFavorites(e, props.chosenDog)
    .then((data) => {
    profClick(props)
  })
  }

  if(props.chosenDog){
    return(
    <Container text>
      <Header
        as='h1'
        content={props.chosenDog.name }
        inverted
        style={{
          fontSize: mobile ? '1em' : '2em',
          fontWeight: 'normal',
          marginTop: mobile ? '.75em' : '1.5em',
        }}
      />
      <img id="dog-page-image" alt="DOGGO" src={props.chosenDog.photos[0] ? props.chosenDog.photos[0].medium : noPhoto} />
      <Grid columns='equal' divided inverted padded>
    <Grid.Row color='black' textAlign='center'>
      <Grid.Column>
        <Segment color='black' inverted>
          <p><b>Age:</b></p> {props.chosenDog.age}
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
          <p><b>Primary Breed:</b></p> {props.chosenDog.breeds.primary }
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
        <p><b>Size:</b> </p> {props.chosenDog.size }
        </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Button data-id={props.chosenDog.id } 
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