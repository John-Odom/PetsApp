const LOCAL = 'http://localhost:3000';

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

 export const findDog = (dogId) => {
    return fetch(`${LOCAL}/dogs/${dogId}`)
    .then(res => res.json())
 } 