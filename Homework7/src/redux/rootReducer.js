import { combineReducers } from 'redux'
import toDoReducer from './toDo/toDoReducers'

const rootReducer = combineReducers({
    toDo: toDoReducer
})

export default rootReducer