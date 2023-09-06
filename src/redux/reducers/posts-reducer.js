import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
}

const postsSlice = createSlice( {
    name: 'postsData',
    initialState: initialState,
    reducers: {
        setPosts ( state, action ) {
            state.posts = action.payload
        },
        resetPosts ( state ) {
            state.posts = []
        }
    },
} )

export const {
    setPosts,
    resetPosts
} = postsSlice.actions
export default postsSlice.reducer
