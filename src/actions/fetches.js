const LOCAL = 'http://localhost:3000';
const API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImNiN2ViODk0YzJiM2I5OGRkOWJiNjAyYWMxMmE3ODJmOWIxYzc2NTY4Zjk4ZWFmZGNmNzNjM2ZmZTAxYWI1YTNlMmM2NjYzZWE2YmRmY2VhIn0.eyJhdWQiOiJqTldTbTVkWHd5SkpDNGlnSkJ2T3VlMHlMNkFGZlpsaVhDaEQwT0hSV29xRHFyMXhtRyIsImp0aSI6ImNiN2ViODk0YzJiM2I5OGRkOWJiNjAyYWMxMmE3ODJmOWIxYzc2NTY4Zjk4ZWFmZGNmNzNjM2ZmZTAxYWI1YTNlMmM2NjYzZWE2YmRmY2VhIiwiaWF0IjoxNTc2ODc1NDkxLCJuYmYiOjE1NzY4NzU0OTEsImV4cCI6MTU3Njg3OTA5MSwic3ViIjoiIiwic2NvcGVzIjpbXX0.qHhqBBhZ5gMaqq-LD3TU-iTvIUo2HjElOqHWcfo4vj2LXf7GRvGuTKqHUXXFiNxuihFYnflG1VjQ9THfuxHab2vyQmK8yfeipXK9lVBJ3JbKdRnWpsX42H7Dt6r5hBNf8hQF6TklVD5ntEjGRf-OqL2OqoVmP-SEMsYOq5uJ1aHK4nql1p43WmpyZ4N5MmDVJY6W7Z4XaGTQb_xwN2T2sXVXwRCqyb7qHVqlPnPQyep2f-c-0cr9Nn448-NQlSQasKTTYNVQ6K1jo7heklqsH642q7KkP9kJrgT0N_BOTT8qHw7Ql_fXyf_TCDIOYJiI6OuMPKX-EEESwZBKCYj15w'

export const addToFavorites = (e, props) =>{
   return fetch(LOCAL+'/favorites', {
      method: "POST",
       headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
       },
       body: JSON.stringify({
          dog_id:e.target.dataset.id,
          user_id: localStorage.user_id
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

 export const getDogs = () => {
    return fetch(`${LOCAL}/dogs`).then(res => res.json())
 } 

 export const getOrgs = () => {
   return fetch(`${LOCAL}/organizations`).then(res => res.json())
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