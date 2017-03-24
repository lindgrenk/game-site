import createLogger from 'redux-logger'
import { createStore, compose, applyMiddleware } from 'redux'

import reducers from './reducers'

const logger = createLogger({ collapsed : true })

const composeStore = compose(
	applyMiddleware(logger)
)(createStore)

const store = composeStore(reducers)

export default store
