import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: true
}

const globalSlice = createSlice( {
    name: 'global',
    initialState: initialState,
    reducers: {
        setIsLoading ( state, action ) {
            state.isLoading = action.payload
        }
    },
} )

export const {
    setIsLoading
} = globalSlice.actions

export default globalSlice.reducer
