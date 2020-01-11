import React from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import DesktopContainer from '../dogsPage/desktopContainer'
import MobileContainer from '../dogsPage/mobileContainer'

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

const dogsPage = () => (
  <ResponsiveContainer />
)
export default withRouter(connect(null, null )(dogsPage))