import { createStore } from 'redux'
import thunk from 'redux-thunk'

const initialState = {}

const middleware = [
      thunk
]


export default createStore()