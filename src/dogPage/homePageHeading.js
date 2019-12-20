import React from 'react';
import {connect} from 'react-redux';
import {
    Container,
    Grid,
    Segment,
    Header
  } from 'semantic-ui-react'
const HomepageHeading = (props,{ mobile }) => {
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
  </Grid>
    </Container>
  )}

  const mapStatetoProps = state => {
    return ({
      chosenDog: state.chosenDog
    })
 }


  export default connect(mapStatetoProps)(HomepageHeading)