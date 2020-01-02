import React from 'react';
import {
    Grid,
    Segment
  } from 'semantic-ui-react'
  import {connect} from 'react-redux';


const InfoBar = (props) => {
    return (
        <Grid.Row color='black' textAlign='center'>
        <Grid.Column>
          <Segment color='black' inverted>
            <p><b>Website:</b></p> 
            <p><a href={props.chosenOrg ? props.chosenOrg.website: null}>
                {props.chosenOrg && props.chosenOrg.website ? props.chosenOrg.website : 'N/A'}
            </a></p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color='black' inverted>
            <p><b>Email:</b></p> 
            <p>{props.chosenOrg && props.chosenOrg.email ? props.chosenOrg.email : 'N/A'}</p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color='black' inverted>
            <p><b>Phone:</b></p> 
            <p>{props.chosenOrg && props.chosenOrg.phone ? props.chosenOrg.phone : 'N/A'}</p>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment color='black' inverted>
          <p><b>Address:</b> </p> 
          <p>{props.chosenOrg && props.chosenOrg.street ? props.chosenOrg.street : 'N/A'}</p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    )
}

const mapStatetoProps = state => {
    return ({
      chosenOrg: state.chosenOrg
    })
 }


  export default connect(mapStatetoProps)(InfoBar)