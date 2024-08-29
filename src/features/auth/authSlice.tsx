import { RootState } from '../../app/store'
import { createSlice } from '@reduxjs/toolkit'

export type Permissions = string [];

// type of user state information
export type User = {
    id: number | null,
    name: string | null,
    email : string | null,
    access_token : string | null | any,
    username  : any ,
    permissions : string[] ,

}
// intial State when the app starts
let intiState: User = {
    id: null,
    name: null,
    email  : null  ,
    access_token:null,
    username  : null ,
    permissions: [] 
}
// get localstoragestate
if (localStorage.getItem('auth') !== null) {
    intiState = { ...JSON.parse(localStorage.getItem('auth') || '{}') as User }
}

const authSlice = createSlice({
    name: 'auth',
    initialState: intiState,
    reducers: {
        setCredentials: (state, action) => {
            const { access_token, permissions , id, name , email , username     } = action.payload
            const auth = { access_token , permissions }
            const user = { id , name , email , username } ; 
            localStorage.setItem('auth', JSON.stringify(auth))
            localStorage.setItem('user', JSON.stringify(user))

        },
        setUserData: (state , action ) =>{
            const { id, name , email , username  , token , permissions  } = action.payload
            const user = { id, name , email , username  , token , permissions }
            localStorage.setItem('user', JSON.stringify(user))
            state = {...state , ...user } ; 
        },
        logOut: (state) => {
            localStorage.removeItem('auth') ;
            localStorage.removeItem('user') ;
            state.id = null
            state.name = null
            state.email = null 
            state.username = null ;
            state.permissions = [] ;
            state.access_token = null ;
        },
    }
})


export const { setCredentials, logOut  , setUserData} = authSlice.actions
export default authSlice.reducer


//getters
export const selectCurrentId = (state: RootState) => state.auth.id
export const selectCurrentUserName = (state: RootState) => state.auth.name
export const selectCurrentPermission = (state: RootState) => state.auth.permissions 
export const selectCurrentToken = (state: RootState) => state.auth.access_token
export const selectCurrentEmail = (state: RootState) => state.auth.email
