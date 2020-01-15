import React from 'react'
import { Button, Header, Image, Modal, Grid} from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import noPhoto from '../images/no-photo-business.jpg'

const OrgModal = (props) => {
  const dog = props.chosenDog
  const org = props.chosenOrg
  if(org){
    return(
        <Modal trigger={<Button>View Organization</Button>} centered={false}>
          <Modal.Header>{org.name}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src={org.photos.length>0 ? org.photos[0].medium : noPhoto} />
            <Modal.Description>
              <Header>Contact Information</Header>
              <Grid>
                  <Grid.Row>
                       Website: {org.website ? <a href={org.website}>&nbsp; {org.website}</a> : 'N/A'}
                  </Grid.Row>
                  <Grid.Row>
                        Email: {org.email ? 
                        <a href={`mailto:${org.email}?subject=Interested in ${dog.name}`}>  
                          &nbsp; {org.email}
                        </a> : 'N/A'}
                  </Grid.Row>
                  <Grid.Row>
                        Address: {org.address.address1} {org.address.city}, {org.address.state} {org.address.postcode}
                  </Grid.Row>
                  <Grid.Row>
                        Phone: {org.phone ? org.phone : 'N/A'}
                  </Grid.Row>
              </Grid>
            </Modal.Description>
          </Modal.Content>
        </Modal>
    )
  } else return null
}

const mapStatetoProps = state => {
    return ({
      chosenOrg: state.chosenOrg,
      chosenDog: state.chosenDog,
    })
 }

  export default withRouter(connect(mapStatetoProps)(OrgModal));