
import { COMMENT_CREATE, DECREMENT, INCREMENT, INPUT_TEXT, COMMENT_UPDATE } from './type';


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

export function inputText(text) {
    return {
        type: INPUT_TEXT,
        text
    }
}

export function commentCreate(text, id) {
    return {
        type: COMMENT_CREATE,
        data: {
            text: text,
            id: id
        }
    }
}
export function commentUpdate(text, id) {
    return {
        type: COMMENT_UPDATE,
        data: {
            text: text,
            id: id
        }
    }
}