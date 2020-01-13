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

export const genderChange = (data) => {
   return {
      type: 'GENDER_CHANGE',
      data
   }
} 
export const ageChange = (data) => {
   return {
      type: 'AGE_CHANGE',
      data
   }
} 
export const breedChange = (data) => {
   return {
      type: 'BREED_CHANGE',
      data
   }
} 
export const statusChange = (data) => {
   return {
      type: 'STATUS_CHANGE',
      data
   }
} 
export const cityChange = (data) => {
   return {
      type: 'CITY_CHANGE',
      data
   }
} 
export const sizeChange = (data) => {
   return {
      type: 'SIZE_CHANGE',
      data
   }
} 
 export const landMoreDogs = (data) => {
   return {
      type: 'LAND_MORE_DOGS',
      data
   }
}
// export const filterDogs = (data) => {
//    return {
//       type: 'FILTER_DOGS',
//       data
//    }
// } 

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
export const landMoreOrgs = (source) =>{
   return {
      type: 'LAND_MORE_ORGS',
      source   
   }
}

export const landingOrgs = (source) =>{
   return {
      type: 'LANDING_ORGS',
      source   
   }
}



