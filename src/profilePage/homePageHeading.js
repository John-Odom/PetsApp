import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
    Container,
    Header
  } from 'semantic-ui-react'
  
  
const HomepageHeading = (props,{ mobile }) => {
  if(props.currentUser){ 
    return(
    <Container text>
      <Header
        as='h1'
        content={props.currentUser.user.username + "'s Favorites"}
        inverted
        style={{
          color:'#80CAB1',
          fontSize: mobile ? '1em' : '2em',
          fontWeight: 'normal',
          marginTop: mobile ? '.75em' : '1.5em',
        }}
      />
    </Container>
  )} else return null } 

  const mapStatetoProps = state => {
    return ({
      currentUser: state.currentUser
    })
 }


  export default withRouter(connect(mapStatetoProps)(HomepageHeading))