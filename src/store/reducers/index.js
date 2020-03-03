import { combineReducers } from 'redux';

const appReducer = combineReducers({

});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  // if(action.type === DESTROY_SESSION)
  //    state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
