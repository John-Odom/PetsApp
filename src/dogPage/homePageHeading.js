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

  
  
const HomepageHeading = (props,{ mobile }) => {
  const add = (e) => {
    addToFavorites(e)
    .then(() => props.history.push(`/favorites`))
  }
    return(
    <Container text>
      <Header
        as='h1'
        content={props.chosenDog ? props.chosenDog.name : null}
        inverted
        style={{
          fontSize: mobile ? '1em' : '2em',
          fontWeight: 'normal',
          marginTop: mobile ? '.75em' : '1.5em',
        }}
      />
      <img id="dog-page-image" alt="DOGGO" src={props.chosenDog ? props.chosenDog.image : null} />
      <Grid columns='equal' divided inverted padded>
    <Grid.Row color='black' textAlign='center'>
      <Grid.Column>
        <Segment color='black' inverted>
          <p><b>Age:</b></p> {props.chosenDog ? props.chosenDog.age : null}
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
          <p><b>Breed:</b></p> {props.chosenDog ? props.chosenDog.breed : null}
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
        <p><b>Size:</b> </p> {props.chosenDog ? props.chosenDog.size : null}
        </Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Button data-id={props.chosenDog ? props.chosenDog.id : null} 
        onClick={(e)=>add(e)}>
          Add To Favorites
        </Button>
        <Button data-id={props.chosenDog ? props.chosenDog.id : null} 
        onClick={(e)=>add(e)}>
          View Organization
        </Button>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    </Container>
  )}

  const mapStatetoProps = state => {
    return ({
      chosenDog: state.chosenDog
    })
 }


  export default withRouter(connect(mapStatetoProps)(HomepageHeading))