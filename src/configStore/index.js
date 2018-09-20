import {createStore} from 'redux';
import rootReducer from '../reducers';
import {loadState, saveState} from './localeStorage'

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(()=>{
  saveState({
    blogs: store.getState().blogs,
    comments: store.getState().comments
  })
})

export default store