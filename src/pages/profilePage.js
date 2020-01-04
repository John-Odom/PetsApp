import React from 'react'
import {fetchProfile,getUsersDogs} from '../actions/fetches' 
import { landDogs, setCurrentUser} from '../actions/reducerActions' 
import PropTypes from 'prop-types'
import { Container, Grid, Segment} from 'semantic-ui-react'
import MobileContainer from '../profilePage/mobileContainer'
import HomepageHeading from '../profilePage/homePageHeading'
import DesktopContainer from '../profilePage/desktopContainer'
import {connect} from 'react-redux'
import UsersDogs from '../profilePage/usersDogs'

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

state={
    dogs:[]
}

componentDidMount () {
    let user=null
    fetchProfile().then(data => {
        user=data
        this.props.setCurrentUser(data)
        getUsersDogs(user.user.id).then(data => this.props.landDogs(data.dogs))
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
      landingDogs : state.landingDogs
    })
 }

export default connect(mapStatetoProps, {landDogs, setCurrentUser})(Profile)