// import reduxDevTools from 'remote-redux-devtools';
import thunkMiddleware from 'redux-thunk'

import configureStore from '../shared/store'

const initialState = {}
const middlewares = [thunkMiddleware]
// const devTools = reduxDevTools({hostname: 'localhost', port: 5678});
const devTools = (f) => f

export default configureStore(initialState, middlewares, devTools)
