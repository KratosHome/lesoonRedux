import { combineReducers } from "redux";
import { likesReducer } from "./likesReduser";
import { inputReduser } from './inputReduser';

export const rootRducer = combineReducers({
    likesReducer,
    inputReduser
})