import  { FETCH_POSTS } from '../../../constants/actionTypes'

const initialState = {
      posts: []
}

export default function (state=initialState, action) {
       switch (action.type) {
           case FETCH_POSTS: 
                return {
                    ...state,
                    posts: action.payload
                }
       
           default:
               return { ...state}
       }
}