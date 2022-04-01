import React, { useState } from 'react';
import SingeleComment from './SingeleComment';

const Coments = (props) => {
    const [textComment, setTextComment] = useState('');

    const handleInput = (e) => {
      
        setTextComment(e.target.value);
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        console.log(textComment)
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
            <SingeleComment />
        </div>
    );
}

export default Coments;
