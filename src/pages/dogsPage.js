// import React, {Component} from 'react';
import React, { useEffect, Component } from "react";
import PropTypes from 'prop-types'
import { withRouter, useLocation } from 'react-router-dom';
import DesktopContainer from '../dogsPage/dogsPageContainer'
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

const DogsPage = () => {
    return (<ResponsiveContainer />)
  }

export default withRouter(DogsPage);