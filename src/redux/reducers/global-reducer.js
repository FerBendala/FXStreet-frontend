import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: true,
    dropdowns: {},
    activeTab: 'Latest',
    containerRef: null,
}

const globalSlice = createSlice( {
    name: 'global',
    initialState: initialState,
    reducers: {
        setIsLoading( state, action ) {
            state.isLoading = action.payload
        },
        setIsDropdownVisible( state, action ) {
            const { dropdownId, isVisible } = action.payload
            state.dropdowns[dropdownId] = isVisible
        },
        setActiveTab( state, action ) {
            state.activeTab = action.payload
        },
        setContainerRef( state, action ) {
            state.containerRef = action.payload
        },
    },
} )

export const {
    setIsLoading,
    setIsDropdownVisible,
    setActiveTab,
    setContainerRef
} = globalSlice.actions

export default globalSlice.reducer
