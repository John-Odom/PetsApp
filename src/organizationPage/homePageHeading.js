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
        content={props.chosenOrg ? props.chosenOrg.name : null}
        inverted
        style={{
          fontSize: mobile ? '1em' : '2em',
          fontWeight: 'normal',
          marginTop: mobile ? '.75em' : '1.5em',
        }}
      />
      <img id="dog-page-image" alt={props.chosenOrg ? props.chosenOrg.name: null} 
      src={props.chosenOrg && props.chosenOrg.image ? props.chosenOrg.image : null} 
      />
      <Grid columns='equal' divided inverted padded>
    <Grid.Row color='black' textAlign='center'>
      <Grid.Column>
        <Segment color='black' inverted>
          <p><b>Age:</b></p> {props.chosenOrg ? props.chosenOrg.age : null}
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
          <p><b>Breed:</b></p> {props.chosenOrg ? props.chosenOrg.breed : null}
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment color='black' inverted>
        <p><b>Size:</b> </p> {props.chosenOrg ? props.chosenOrg.size : null}
        </Segment>
      </Grid.Column>
    </Grid.Row>
    {/* <Grid.Row>
      <Grid.Column>
        <Button data-id={props.chosenOrg ? props.chosenOrg.id : null} 
        onClick={(e)=>add(e)}>
          Add To Favorites
        </Button>
        <Button data-id={props.chosenOrg ? props.chosenOrg.id : null} 
        onClick={(e)=>add(e)}>
          View Organization
        </Button>
      </Grid.Column>
    </Grid.Row> */}
  </Grid>
    </Container>
  )}

  const mapStatetoProps = state => {
    return ({
      chosenOrg: state.chosenOrg
    })
 }


  export default withRouter(connect(mapStatetoProps)(HomepageHeading))