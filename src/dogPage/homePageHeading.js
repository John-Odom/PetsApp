import React from 'react';
import {connect} from 'react-redux';
import {
    Button,
    Container,
    Header
  } from 'semantic-ui-react'
const HomepageHeading = (props,{ mobile }) => {
    console.log(props)
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
      <img id="dog-page-image" src={props.chosenDog ? props.chosenDog.image : null} />
      
      {/* <Button primary size='huge'>
        Get Started
        <Icon name='right arrow' />
      </Button> */}
    </Container>
  )}

  const mapStatetoProps = state => {
    return ({
      chosenDog: state.chosenDog
    })
 }


  export default connect(mapStatetoProps)(HomepageHeading)