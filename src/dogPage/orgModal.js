import React from 'react'
import { Button, Header, Image, Modal, Grid} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import noPhoto from '../images/no-photo-business.jpg'

const OrgModal = (props) => {
    if(props.chosenOrg){
    return(
        <Modal trigger={<Button>View Organization</Button>} centered={false}>
          <Modal.Header>{props.chosenOrg.name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={props.chosenOrg.photos.length > 0 ? props.chosenOrg.photos[0].medium : noPhoto} />
            <Modal.Description>
              <Header>Contact Information</Header>
              <Grid>
                  <Grid.Row>
                       Website: {props.chosenOrg.website ? 
                        <a href={props.chosenOrg.website}>
                          &nbsp; {props.chosenOrg.website}
                        </a> : 'N/A'}
                  </Grid.Row>
                  <Grid.Row>
                        Email: {props.chosenOrg.email ? 
                        <a href=
                        {`mailto:${props.chosenOrg.email}?subject=Interested in ${props.chosenDog.name}`}
                        >  
                          &nbsp; {props.chosenOrg.email}
                        </a> : 'N/A'}
                  </Grid.Row>
                  <Grid.Row>
                        Address: {props.chosenOrg.address.address1} {props.chosenOrg.address.city}, {props.chosenOrg.address.state} {props.chosenOrg.address.postcode}
                  </Grid.Row>
                  <Grid.Row>
                        Phone: {props.chosenOrg.phone ? props.chosenOrg.phone : 'N/A'}
                  </Grid.Row>
              </Grid>
            </Modal.Description>
          </Modal.Content>
        </Modal>
    )} else return null
}

const mapStatetoProps = state => {
    return ({
      chosenOrg: state.chosenOrg,
      chosenDog: state.chosenDog,
    })
 }

  export default withRouter(connect(mapStatetoProps)(OrgModal));