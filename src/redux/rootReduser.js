import { combineReducers } from "redux";
import { likesReducer } from "./likesReduser";
import { inputReduser } from './inputReduser';
import { commentsReduser } from './commentsReduser';
import { loadingReduser } from './loaderReduse';

export const rootRducer = combineReducers({
    likesReducer,
    inputReduser,
    commentsReduser,
    loadingReduser
})