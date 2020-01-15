import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {
    Container,
    Header
  } from 'semantic-ui-react'
  import InfoBar from './infoBar'
  import noPhoto from '../images/no-photo-business.jpg'

const HomepageHeading = (props,{ mobile }) => {
    return(
    <Container text>
      <Header
        as='h1'
        content={props.chosenOrg.name}
        inverted
        style={{
          fontSize: mobile ? '1em' : '2em',
          fontWeight: 'normal',
          marginTop: mobile ? '.75em' : '1.5em',
        }}
      />
      <img id="orgCard" style={{ maxHeight: 300, maxWidth: 300 }} alt={props.chosenOrg && props.chosenOrg.name} 
        src={props.chosenOrg.photos.length>0 ? props.chosenOrg.photos[0].medium : noPhoto} 
      />
        <InfoBar />
    </Container>
  )}

  const mapStatetoProps = state => {
    return ({
      chosenOrg: state.chosenOrg
    })
 }


  export default withRouter(connect(mapStatetoProps)(HomepageHeading))