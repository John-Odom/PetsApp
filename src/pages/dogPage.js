import { withRouter } from 'react-router-dom';
import {findDog} from '../actions/fetches';
import {clickDog} from '../actions/reducerActions';
import { connect } from 'react-redux';
import  OrgInfo  from '../dogPage/orgInfo'
import DogPics from '../dogPage/dogPics'
import '../stylesheets/dogPage.css';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Container, Grid, Segment} from 'semantic-ui-react'
import MobileContainer from '../dogPage/mobileContainer'
import HomepageHeading from '../dogPage/homePageHeading'
import DesktopContainer from '../dogPage/desktopContainer'

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
   state = {
      dog:null
   }
       componentDidMount () {
        const dogId = this.props.match.params.id
        findDog(dogId)
        .then((dog) => {
           this.setState({dog})
           this.props.clickDog(dog);
         })
      }
   
      render(){   
         return(
         <ResponsiveContainer>
           <Segment style={{ padding: '8em 0em' }} vertical>
             <Grid container stackable verticalAlign='middle'> 
               <DogPics />
               <Grid.Row>
                  <Grid.Column textAlign='center'>
                     <Container text>
                        <OrgInfo />
                     </Container>
                  </Grid.Column>
               </Grid.Row>
             </Grid>
           </Segment>
         </ResponsiveContainer>
)}}

export default withRouter(connect(null, {clickDog} )(DogPage));
