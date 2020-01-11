export const setCurrentUser = (user) => {
    return {
       type: 'SET_CURRENT_USER',
       user
    }
 } 
 
 export const landDogs = (data) => {
   return {
      type: 'LAND_DOGS',
      data
   }
} 
export const userDogs = (data) => {
   return {
      type: 'USER_DOGS',
      data
   }
} 
 export const landMoreDogs = (data) => {
   return {
      type: 'LAND_MORE_DOGS',
      data
   }
}
export const filterDogs = (data) => {
   return {
      type: 'FILTER_DOGS',
      data
   }
} 

export const clickDog = (data) => {
   return {
      type: 'CLICK_DOG',
      data
   }
}
export const toggleFilter = (source) => {
   return {
      type: 'TOGGLE_FILTER',
      source   
   }
} 

export const setToken = (source) => {
   return {
      type: 'SET_TOKEN',
      source   
   }
} 

export const setOrg = (source) =>{
   return {
      type: 'SET_ORG',
      source   
   }
}

export const landOrgs = (source) =>{
   return {
      type: 'LAND_ORGS',
      source   
   }
}

export const landingOrgs = (source) =>{
   return {
      type: 'LANDING_ORGS',
      source   
   }
}



