import React, { Component } from 'react';
import '../stylesheets/dogsPage.css';
import {findOrg, fetchOrg, getOrg, getAuthToken, getPetFinderToken} from '../actions/fetches';
import {setOrg} from '../actions/reducerActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Container,
    Grid,
    Segment
  } from 'semantic-ui-react'
  import PropTypes from 'prop-types'
  import MobileContainer from '../organizationPage/mobileContainer'
  import HomepageHeading from '../organizationPage/homePageHeading'
  import DesktopContainer from '../organizationPage/desktopContainer'
  import OrgsDogs from '../organizationPage/orgsDogs'

  HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
  }
  
  DesktopContainer.propTypes = {
    children: PropTypes.node,
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }
  
  const ResponsiveContainer = ({ children }) => (
    <div>
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  )
  
  ResponsiveContainer.propTypes = {
    children: PropTypes.node,
  }

class organizationPage extends Component {

     componentDidMount () { 
      const orgId = this.props.match.params.id
       if(this.props.chosenOrg){
        findOrg(orgId)
       }
       else {
        findOrg(orgId).then((org) => {
           getPetFinderToken().then(token=>{
            getOrg(org.apiid, token.access_token).then(data=>{
              this.props.setOrg(data.organization)
            })
           })
         })
       }
      }
    
    render(){
        if(this.props.chosenOrg){
        return (
          <ResponsiveContainer>
           <Segment style={{ padding: '2em 0em' }} vertical>
             <Grid container stackable verticalAlign='middle'> 
               <Grid.Row>
                  <Grid.Column textAlign='center'>
                     <Container text>
                     <h1>{this.props.chosenOrg.name}'s Dogs</h1>
                     </Container>
                  </Grid.Column>
               </Grid.Row>
             </Grid>
             <OrgsDogs />
           </Segment>
          </ResponsiveContainer>
        );
        } else {
            return null
        }
    }
}
const mapStatetoProps = state => {
  return ({
    chosenOrg: state.chosenOrg
  })
}

export default withRouter(connect(mapStatetoProps, {setOrg} )(organizationPage));