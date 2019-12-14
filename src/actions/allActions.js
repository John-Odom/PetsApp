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