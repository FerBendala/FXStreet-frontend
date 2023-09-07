import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: true,
    dropdowns: {}
}

const globalSlice = createSlice( {
    name: 'global',
    initialState: initialState,
    reducers: {
        setIsLoading ( state, action ) {
            state.isLoading = action.payload
        },
        setIsDropdownVisible ( state, action ) {
            const { dropdownId, isVisible } = action.payload
            state.dropdowns[dropdownId] = isVisible
        }
    },
} )

export const {
    setIsLoading,
    setIsDropdownVisible
} = globalSlice.actions

export default globalSlice.reducer
