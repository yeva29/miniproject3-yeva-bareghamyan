import axios from "axios";

const BASE_URL = "http://localhost:8000/api/"
export const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MWQ4YzgxMjcwZWE4MTg2YTE3OWM2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MDUxNjcyMywiZXhwIjoxNjgwNzc1OTIzfQ.S7UWFERZ5d4eEOzZWCgi8YAm01bQUsuW7AIlOz8azk0"

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken

export const publicRequest = axios.create({
    baseURL: BASE_URL,
    
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {Authorization: `Bearer ${TOKEN}` }
})
  
  export function deleteUserToken() {
    delete userRequest.defaults.headers.common.Authorization;
  }
// export const delete_token =  axios.delete({
//     url: BASE_URL,
//     header: {token: `Bearer ${TOKEN}` }
// });
