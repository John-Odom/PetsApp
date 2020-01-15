import React from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import DesktopContainer from '../organizationsPage/orgsPageContainer'
import MobileContainer from '../organizationsPage/mobileContainer'
import '../stylesheets/orgsPage.css'

const OrganizationsPage = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

export default withRouter(connect(null, null )(OrganizationsPage))