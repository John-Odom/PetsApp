  import {Responsive} from 'semantic-ui-react'
  
  export const logout = (obj) => {
    localStorage.clear()
    obj.props.history.push('/login')
  } 
  export const homeClick = (obj) => {
    obj.props.history.push('/welcome')
  } 
  export const faveClick = (obj) => {
    obj.props.history.push('/favorites')
  } 
  export const profClick = (obj) => {
    obj.props.history.push('/profile')
  } 
  export const orgsClick = (obj) => {
    obj.props.history.push('/organizations')
  } 
  // export const orgClick = (obj) => {
  //   obj.props.history.push('/organizations/:id')
  // } 
  export const getWidth = () => {
    const isSSR = typeof window === 'undefined'
  
    return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
  }
  