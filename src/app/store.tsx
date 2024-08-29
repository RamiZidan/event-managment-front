import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'

// import other reducers
import authReducer from '../features/auth/authSlice'
import { usersApiSlice } from '../features/users/usersApiSlice'
import { surnamesApiSlice } from '../features/surnames/surnamesApiSlice'
import { groupsApiSlice } from '../features/groups/groupsApiSlice'
import { invitationsApiSlice } from '../features/invitations/invitationsApiSlice'
import { seatsApiSlice } from '../features/seats/seatsApiSlice'
// import { coursesApiSlice } from '../features/courses/coursesApiSlice'

// store (state,(reducers(actions to dispatch)))

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        [usersApiSlice.reducerPath]:usersApiSlice.reducer,
        [surnamesApiSlice.reducerPath]: surnamesApiSlice.reducer,
        [groupsApiSlice.reducerPath]: groupsApiSlice.reducer,
        [invitationsApiSlice.reducerPath]: invitationsApiSlice.reducer,
        [seatsApiSlice.reducerPath]: seatsApiSlice.reducer,        
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({serializableCheck: false,}).concat(apiSlice.middleware)
    , devTools: true
})

export type RootState = ReturnType<typeof store.getState>
