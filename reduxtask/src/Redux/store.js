import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './rootReducers';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

function configureStore() {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk)
    )
  );
  return store;
}
const store = configureStore(combineReducers);
export default store;
