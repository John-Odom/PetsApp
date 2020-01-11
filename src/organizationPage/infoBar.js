import React from 'react';
import {
    Grid,
    Segment
  } from 'semantic-ui-react'
  import {connect} from 'react-redux';


const InfoBar = (props) => {
    return (
      <Grid columns='equal' divided inverted padded>
        <Grid.Row color='black' textAlign='center'>
        <Grid.Column>
          <Segment color='black' inverted>
            <p><b>Website:</b></p> 
            <p><b><a href={props.chosenOrg.website}>
              {props.chosenOrg.website ? props.chosenOrg.website : 'N/A'}
            </a></b></p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color='black' inverted>
            <p><b>Phone:</b></p> 
            <p><b>{props.chosenOrg.phone ? props.chosenOrg.phone : 'N/A'}</b></p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment color='black' inverted>
            <p><b>Email:</b></p> 
            <p><b>{props.chosenOrg.email ? props.chosenOrg.email : 'N/A'}</b></p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color='black' inverted>
          <p><b>Address:</b> </p> 
          <p><b>{props.chosenOrg.address.address1}</b></p>
          <p><b>{props.chosenOrg.address.city}, {props.chosenOrg.address.state} {props.chosenOrg.address.postcode}</b></p>
          </Segment>
        </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

const mapStatetoProps = state => {
    return ({
      chosenOrg: state.chosenOrg
    })
 }


  export default connect(mapStatetoProps)(InfoBar)