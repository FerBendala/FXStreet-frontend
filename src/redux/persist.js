import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './reducers/posts-reducer'

const persistConfig = {
    key: 'posts',
    storage,
}

const persistedPostsReducer =
    persistReducer( persistConfig, userReducer )

export { persistedPostsReducer }
