import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: true,
    isDropdownVisible: false,
}

const globalSlice = createSlice( {
    name: 'global',
    initialState: initialState,
    reducers: {
        setIsLoading ( state, action ) {
            state.isLoading = action.payload
        },
        setIsDropdownVisible ( state, action ) {
            state.isDropdownVisible = action.payload
        },
    },
} )

export const {
    setIsLoading,
    setIsDropdownVisible
} = globalSlice.actions

export default globalSlice.reducer
