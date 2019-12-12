export const setCurrentUser = (userId) => {
    return {
       type: 'SET_CURRENT_USER',
       userId
    }
 } 
 
 export const landDogs = (data) => {
   return {
      type: 'LAND_DOGS',
      data
   }
} 
 export const landMoreDogs = (data) => {
   return {
      type: 'LAND_MORE_DOGS',
      data
   }
}
export const clickDog = (data) => {
   return {
      type: 'CLICK_DOG',
      data
   }
}


