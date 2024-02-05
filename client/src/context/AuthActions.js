export const LoginStart = (userCredentials) =>({
    type:"LOGIN_START",
})
export const LoginSuccess = (user) =>({
    type:"LOGIN_SUCCESS",
    payload: user
})
export const LoginFail = (error) =>({
    type:"LOGIN_FAILURE",
    payload:error
})

export const Follow = (userId) =>({
    type:"FOLLOW",
    payload: userId,
})
export const Logout=()=>({
    type:"LOGOUT",
})