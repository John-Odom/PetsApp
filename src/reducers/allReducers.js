let initialState = {
    currentUser: null,
    landingDogs: [],
    chosenDog: null
  }

  export default (state=initialState, action) => {
    switch (action.type) {
  
          case 'SET_CURRENT_USER':
            return {
             ...state,
             currentUser: action.user_id
            }
          case 'LAND_DOGS':
            return {
            ...state, 
            landingDogs: action.data
            }  
          case 'LAND_MORE_DOGS':
            return {
            ...state,
            landingDogs: [...state.landingDogs, ...action.data]
            } 
          case 'CLICK_DOG':
            return {
            ...state,
            chosenDog: action.data
            }   
          case 'TOGGLE_FILTER':
            return {
            ...state, 
            filter: action.source
        } 
          
      default:
        return state;
      }
  }