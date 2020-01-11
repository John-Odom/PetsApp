import React from 'react'
import {fetchProfile,getUsersDogs} from '../actions/fetches' 
import { userDogs, setCurrentUser} from '../actions/reducerActions' 
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
    fetchProfile().then(data => {
        this.props.setCurrentUser(data)
        getUsersDogs(this.props.currentUser.user.id).then(data => {
          this.props.userDogs(data.dogs)
        })
    })
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
  } else  {return null}
}
}

const mapStatetoProps = state => {
    return ({
      currentUser : state.currentUser,
      landingDogs : state.landingDogs,
      userDogs: state.userDogs
    })
 }

export default connect(mapStatetoProps, {userDogs, setCurrentUser})(Profile)