import React, { Component } from 'react';
import '../stylesheets/landingPage.css';
import {findOrg} from '../actions/fetches';
import {clickOrg} from '../actions/reducerActions';
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
        findOrg(orgId)
        .then((org) => {
           this.props.clickOrg(org);
         })
      }
    
    render(){
        if(this.props.chosenOrg){
        return (
          <ResponsiveContainer>
           <Segment style={{ padding: '8em 0em' }} vertical>
             <Grid container stackable verticalAlign='middle'> 
               <Grid.Row>
                  <Grid.Column textAlign='center'>
                     <Container text>
                       <OrgsDogs />
                     </Container>
                  </Grid.Column>
               </Grid.Row>
             </Grid>
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

export default withRouter(connect(mapStatetoProps, {clickOrg} )(organizationPage));