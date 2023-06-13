import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import rootReducer from "./../Reducer/index.jsx"


let intialState = {}
const middleware = [thunk];
let store = createStore(
    rootReducer,
    intialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
// composeWithDevTools(applyMiddleware(thunk,other))
export default store;