let initialState = {
    currentUser: null,
    landingDogs: [],
    landingOrgs: [],
    chosenDog: null,
    chosenOrg: null,
    apiToken: null,
    userDogs: []
  }

  export default (state=initialState, action) => {
    switch (action.type) {
          case 'SET_CURRENT_USER':
            return {
             ...state,
             currentUser: action.user
            }
          case 'LAND_DOGS':
            return {
            ...state, 
            landingDogs: action.data
            }  
            case 'USER_DOGS':
            return {
            ...state, 
            userDogs: action.data
            } 
            case 'FILTER_DOGS':
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
            case 'CLICK_ORG':
            return {
            ...state,
            chosenOrg: action.data
            }   
          case 'TOGGLE_FILTER':
            return {
            ...state, 
            filter: action.source
          } 
          case 'SET_TOKEN':
            return {
            ...state,
            apiToken: action.source
          }
          case 'SET_ORG':
            return {
              ...state,
              chosenOrg: action.source
            }
          case 'LAND_ORGS':
            return {
              ...state,
              landingOrgs: action.source
            }
      default:
        return state;
      }
  }