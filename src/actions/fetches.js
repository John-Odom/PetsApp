const LOCAL = 'http://localhost:3000';
const PETFINDERTOKEN = 'https://api.petfinder.com/v2/oauth2/token'
let API_TOKEN = null

export const addToFavorites = (e, dog) =>{
   return fetch(LOCAL+'/favorites', {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
       body: JSON.stringify({
          dog_id:e.target.dataset.id,
          user_id: localStorage.user_id,
          api_dog_id: dog.api_dog_id
       })
   })
   .then(res =>  res.json())
 }

 export const postDog = (dog) =>{
   return fetch(LOCAL+'/dogs', {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
       body: JSON.stringify({
          dog
       })
   })
   .then(res =>  res.json())
 }

 export const postOrg = (org) =>{
    console.log('in org fetch', org)
   return fetch(LOCAL+'/organizations', {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
       body: JSON.stringify({
          org
       })
   })
   .then(res =>  res.json())
 }

export const handleNewUser = (user) => {
    return fetch(`${LOCAL}/users`, {
       method: "POST",
       headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
       body: JSON.stringify({
          user: user
       })
    }).then(res =>  res.json())
 } 

export const getAuthToken = (user) => {
    return fetch(`${LOCAL}/login`, {
       method: "POST",
       headers: {
          "Content-Type": "application/json"
       },
       body: JSON.stringify({
        user: user
     })
    }).then(res => res.json())
 }

 export const getPetFinderToken = () => {
   const apiKey = "jNWSm5dXwyJJC4igJBvOue0yL6AFfZliXChD0OHRWoqDqr1xmG"
   const apiSecret = "mdd46smECtcGndlPsXQTbM6YKO907s2uMQ0vvCtc"
   return fetch (PETFINDERTOKEN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
         "client_id": apiKey,
         "client_secret": apiSecret,
         "grant_type": "client_credentials",
    })
   }).then(res => res.json())
}
   
export const getDogs = (accessToken) => {
      let page=1
      return fetch('https://api.petfinder.com/v2/animals?location=atlanta, GA&distance=20&type=dog&limit=100&page='+page, {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
         "Authorization": `Bearer ${accessToken}`
       }
    }).then(res=>res.json())
} 

 export const getOrgs = (accessToken) => {
   return fetch('https://api.petfinder.com/v2/organizations?location=atlanta, GA&distance=20&limit=100&', {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
         "Authorization": `Bearer ${accessToken}`
       }
   }) .then(res => res.json())
} 

export const getOrg = (id, accessToken) => {
   return fetch('https://api.petfinder.com/v2/organizations/' + id, {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
         "Authorization": `Bearer ${accessToken}`
       }
   }) .then(res => res.json())
} 

 export const findDog = (dogId) => {
    return fetch(`${LOCAL}/dogs/${dogId}`)
    .then(res => res.json())
 } 
 export const findOrg = (orgId) => {
   return fetch(`${LOCAL}/organizations/${orgId}`)
   .then(res => res.json())
} 

 export const findDogInApi = (dog) =>{
    return fetch('https://api.petfinder.com/v2/animals/' + dog.api_dog_id, {
      method: "GET",
      headers:{
         'Authorization' : 'Bearer ' + API_TOKEN
      }
    })
   .then(res=>res.json())
 }

 export const fetchProfile = () => {
   return fetch("http://localhost:3000/profile", {
      headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization": localStorage.getItem("jwt")
      }
    }).then(res => res.json())
}

export const getUsersDogs = (userId) => {
   return fetch(`${LOCAL}/users/${userId}`).then(res => res.json())
} 

export const fetchOrg = (id, accessToken) => {
   return fetch(`https://api.petfinder.com/v2/organizations/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${accessToken}`
      }
   })
   .then(res=> res.json())
}