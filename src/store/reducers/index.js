import { combineReducers } from 'redux'
import postsReducer from './postsReducer/postsReducer'

//import reducers...

export default combineReducers({
       postsData: postsReducer
})