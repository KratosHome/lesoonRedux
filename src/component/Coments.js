import React, { useState } from 'react';
import SingeleComment from './SingeleComment';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from "uniqid"
import { commentCreate } from '../redux/action';
import { commentsReduser } from '../redux/commentsReduser';

const Coments = (props) => {
    const [textComment, setTextComment] = useState('');

    const comments = useSelector(state => {
        const { commentsReduser } = state
        return commentsReduser.comments
    })

    const dispatch = useDispatch()

    const handleInput = (e) => {
        setTextComment(e.target.value);
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const id = uniqid();
        dispatch(commentCreate(textComment, id))
    }
  
    
    return (
        <div className='card-comments'>
            <form
                className='comments-item-create'
                onSubmit={handelSubmit}
             >
                <input
                    type='text'
                    value={textComment}
                    onChange={handleInput} />
                <input type="submit" hidden
                />
            </form>
            {!!comments.length && comments.map(res => {
                return <SingeleComment key={res.id} data={res} />
            })}
        </div>
    );
}

export default Coments;
