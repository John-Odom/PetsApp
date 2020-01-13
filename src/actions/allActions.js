  import {Responsive} from 'semantic-ui-react'
//   import {allFiltersPresent, noCityInFilter} from './fetches'
// import { handleSearch } from './reducerActions'
  
  export const logout = (obj) => {
    localStorage.clear()
    obj.props.history.push('/login')
  } 
  export const homeClick = (obj) => {
    obj.props.history.push('/dogs')
  } 
  
  export const profClick = (obj) => {
    obj.history.push('/profile')
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
  

   export const filterPups = (dogs, searchValue) => {
    let filteredDogs = dogs.filter (dog => {
       return dog.name.toLowerCase().startsWith(searchValue.toLowerCase())
    })
    return filteredDogs
  }

  


 
  