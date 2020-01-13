import { withRouter } from 'react-router-dom';
import {findDog, fetchOrg, getPetFinderToken} from '../actions/fetches';
import {clickDog, setToken, setOrg} from '../actions/reducerActions';
import { connect } from 'react-redux';
import '../stylesheets/dogPage.css';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Grid, Segment} from 'semantic-ui-react'
import MobileContainer from '../dogPage/mobileContainer'
import HomepageHeading from '../dogPage/dogPageHeading'
import DesktopContainer from '../dogPage/dogPageContainer'
// import 'https://fonts.googleapis.com/css?family=Raleway&display=swap'
HomepageHeading.propTypes = {mobile: PropTypes.bool}
DesktopContainer.propTypes = {children: PropTypes.node}
MobileContainer.propTypes = {children: PropTypes.node}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)
ResponsiveContainer.propTypes = {children: PropTypes.node}

class DogPage extends Component {
   
       componentDidMount () {
         if(!this.props.apiToken){
            findDog(this.props.match.params.id)
            .then((dog) => {
              this.props.clickDog(dog)
              getPetFinderToken()
              .then( token => {
                  this.props.setToken(token.access_token)
                  this.findOrg(token.access_token)
                })})
          } else {
            this.findOrg(this.props.apiToken);
          }
        }

        findOrg = (token) =>{
          fetchOrg(this.props.chosenDog.organization_id, token)
          .then(data => this.props.setOrg(data.organization))
        }
   
      render(){   
         return(
         <ResponsiveContainer>
           <Segment style={{ padding: '8em 0em' }} vertical>
             <Grid container stackable verticalAlign='middle'> 
               <Grid.Row>
                  <Grid.Column textAlign='center'>
                     <Container text>
                     </Container>
                  </Grid.Column>
               </Grid.Row>
             </Grid>
           </Segment>
         </ResponsiveContainer>
)}}

const mapStatetoProps = state => {
  return ({
    chosenDog: state.chosenDog,
    apiToken: state.apiToken
  })
}

export default withRouter(connect(mapStatetoProps, {clickDog, setToken, setOrg} )(DogPage));
