import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
// import { createLogger } from 'redux-logger';

import { data } from './todo/DataReducer';
import { detailedData } from './detailed/DataReducer';
import { AppActions } from './models/actions';

// const logger = createLogger();

export const rootReducer = combineReducers({ data, detailedData });

export type AppState = ReturnType<typeof rootReducer>;



declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;






export const store = createStore<AppState, AppActions, {}, {}>(
  rootReducer,
  composeEnhancers( applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>, ))
);



