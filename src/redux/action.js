
import { DECREMENT, INCREMENT } from './type';


export function incrimetLikes() {
    return {
        type: INCREMENT
    }
}

export function decrementLikes() {
    return {
        type: DECREMENT
    }
}