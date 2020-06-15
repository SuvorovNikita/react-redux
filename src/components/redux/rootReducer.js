import {combineReducers} from "redux";
import {postsReducer} from "./postReducer";

export const rootReducers = combineReducers({
    posts: postsReducer
})