import {applyMiddleware, combineReducers, createStore} from "redux";
import comment from "./comment.reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({comment}),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store;