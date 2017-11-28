import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"

import todos from "../reducers/TodoReducer.js"

const middleware = applyMiddleware(thunk, logger())

export default createStore(todos);