import React from 'react';
import { connect, useSelector } from 'react-redux';
import { likesReducer } from '../redux/likesReduser';

const Likes = (props) => {
    
    return (
        <div className='button-controls'>
            <button onClick={props.onIncremetLikes}>{props.likes}</button>
            <button onClick={props.onDecremetLikes}>❤ Dislike</button>
        </div>
    );
}

function mapStateToProps(state) {
    const { likesReducer } = state
    return {
        likes: likesReducer.likes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncremetLikes: () => {
            const action = { type: "INCREMENT" }
            dispatch(action)
        },
        onDecremetLikes: () => {
            const action = { type: "DECREMENT" }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
