import PropTypes from 'prop-types'
import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import {Button, Container, Header, Icon} from 'semantic-ui-react'
import DesktopContainer from '../organizationsPage/orgsPageContainer'
import MobileContainer from '../organizationsPage/mobileContainer'
import '../stylesheets/orgsPage.css'

const OrgsHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Imagine-a-Company'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

OrgsHeading.propTypes = {
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

const OrganizationsPage = () => (
  <ResponsiveContainer />
)
export default withRouter(connect(null, null )(OrganizationsPage))