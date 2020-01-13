import React from 'react'
import {fetchProfile, getPetFinderToken} from '../actions/fetches' 
import { setCurrentUser, setToken} from '../actions/reducerActions' 
import PropTypes from 'prop-types'
import { Container, Grid, Segment} from 'semantic-ui-react'
import MobileContainer from '../profilePage/mobileContainer'
import HomepageHeading from '../profilePage/homePageHeading'
import DesktopContainer from '../profilePage/desktopContainer'
import {connect} from 'react-redux'
import UsersDogs from '../profilePage/usersDogs'
import '../stylesheets/profilePage.css'

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


class Profile extends React.Component {

componentDidMount () {
    fetchProfile().then(user => {
        this.props.setCurrentUser(user)
    })
    if(!this.props.apiToken) {
      getPetFinderToken().then( token => this.props.setToken(token.access_token))
    }
}
  render() {
      if(this.props.currentUser){
        return(
            <ResponsiveContainer>
              <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'> 
                  {/* <DogPics /> */}
                  <Grid.Row>
                     <Grid.Column textAlign='center'>
                        <Container text>
                           {/* <OrgInfo /> */}
                        </Container>
                     </Grid.Column>
                  </Grid.Row>
                </Grid>
                <UsersDogs />
              </Segment>
            </ResponsiveContainer>
        )
  } else return null
}
}

const mapStatetoProps = state => {
    return ({
      currentUser : state.currentUser,
      landingDogs : state.landingDogs,
      apiToken: state.apiToken
    })
 }

export default connect(mapStatetoProps, { setCurrentUser, setToken})(Profile)