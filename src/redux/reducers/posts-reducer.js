import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    isLiked: [],
    isSaved: [],
}

const postsSlice = createSlice( {
    name: 'postsData',
    initialState: initialState,
    reducers: {
        setPosts( state, action ) {
            state.posts = action.payload
        },
        setIsLiked( state, action ) {
            state.isLiked = action.payload
        },
        setIsSaved( state, action ) {
            state.isSaved = action.payload
        },
        resetPosts( state ) {
            state.posts = []
        }
    },
} )

export const {
    setPosts,
    setIsLiked,
    setIsSaved,
    resetPosts
} = postsSlice.actions
export default postsSlice.reducer
