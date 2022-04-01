import React from 'react';
import { connect, useSelector } from 'react-redux';
import { likesReducer } from '../redux/likesReduser';
import { decrementLikes, incrimetLikes } from '../redux/action';

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
        onIncremetLikes: () => dispatch(incrimetLikes()),
        onDecremetLikes: () => dispatch(decrementLikes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
