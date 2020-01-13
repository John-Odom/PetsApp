let initialState = {
    currentUser: null,
    landingDogs: [],
    landingOrgs: [],
    chosenDog: null,
    chosenOrg: null,
    apiToken: null,
    userDogs: [],
    city:null, 
    status:'adoptable', 
    sizes: [], 
    genders: [], 
    ages: [], 
    breeds:[]
  }

  export default (state=initialState, action) => {
    switch (action.type) {
            case 'GENDER_CHANGE':
            return {
            ...state, 
            genders: action.data
            }  
            case 'AGE_CHANGE':
            return {
            ...state, 
            ages: action.data
            }  
            case 'BREED_CHANGE':
            return {
            ...state, 
            breeds: action.data
            }  
            case 'STATUS_CHANGE':
            return {
            ...state, 
            status: action.data
            }  
            case 'CITY_CHANGE':
            return {
            ...state, 
            city: action.data
            }  
            case 'SIZE_CHANGE':
            return {
            ...state, 
            sizes: action.data
            }  
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
          case 'LAND_MORE_DOGS':
            console.log(action)
            return {
            ...state,
            landingDogs: [...state.landingDogs, ...action.data.animals]
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
            case 'LAND_MORE_ORGS':
              console.log(action)
            return {
              ...state,
              landingOrgs: [...state.landingOrgs, ...action.source.organizations]
            }
      default:
        return state;
      }
  }