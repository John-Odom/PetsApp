import { withRouter } from 'react-router-dom';
import {findDog} from '../actions/fetches';
import {clickDog} from '../actions/reducerActions';
import { connect } from 'react-redux';
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
   
       componentDidMount () {
         if(!this.props.chosenDog){
            findDog(this.props.match.params.id)
            .then((dog) => this.props.clickDog(dog));
          }
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
                     </Container>
                  </Grid.Column>
               </Grid.Row>
             </Grid>
           </Segment>
         </ResponsiveContainer>
)}}

const mapStatetoProps = state => {
  return ({
    chosenDog: state.chosenDog
  })
}

export default withRouter(connect(mapStatetoProps, {clickDog} )(DogPage));
