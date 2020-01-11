import React from 'react'
import { Button, Header, Image, Modal, Grid, GridColumn } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import noPhoto from '../images/no-photo-business.jpg'

const OrgModal = (props) => {
    if(props.chosenOrg){
    return(
        <Modal trigger={<Button>View Organization</Button>} centered={false}>
          <Modal.Header>{props.chosenOrg.organization.name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={props.chosenOrg.organization.photos.length > 0 ? props.chosenOrg.organization.photos[0].medium : noPhoto} />
            <Modal.Description>
              <Header>Contact Information</Header>
              <Grid>
                  <Grid.Row>
                       Website: {props.chosenOrg.organization.website ? 
                        <a href={props.chosenOrg.organization.website}>
                          &nbsp; {props.chosenOrg.organization.website}
                        </a> : 'N/A'}
                  </Grid.Row>
                  <Grid.Row>
                        Email: {props.chosenOrg.organization.email ? 
                        <a href=
                        {`mailto:${props.chosenOrg.organization.email}?subject=Interested in ${props.chosenDog.name}`}
                        >  
                          &nbsp; {props.chosenOrg.organization.email}
                        </a> : 'N/A'}
                  </Grid.Row>
                  <Grid.Row>
                        Address: {props.chosenOrg.organization.address.address1} {props.chosenOrg.organization.address.city}, {props.chosenOrg.organization.address.state} {props.chosenOrg.organization.address.postcode}
                  </Grid.Row>
                  <Grid.Row>
                        Phone: {props.chosenOrg.organization.phone ? props.chosenOrg.organization.phone : 'N/A'}
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