let initialState = {
    // landingMovies: [],
    currentUser: null,
  }

  export default (state=initialState, action) => {
    switch (action.type) {
  
        // case 'LAND_MOVIES':
        //   return {
        //     ...state,
        //     landingMovies: action.data
        //   } 
  
          case 'SET_CURRENT_USER':
          return {
            ...state,
            currentUser: action.user_id
          } 
          
      default:
        return state;
      }
  }