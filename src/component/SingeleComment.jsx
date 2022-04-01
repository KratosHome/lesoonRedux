import React from 'react';

const SingeleComment = () => {
    return (
        <form className='comments-item'>
            <div className='comments-item-delete'>&times;</div>
            <input type="text" />
            <input type="submit" hidden />
        </form>
    );
}

export default SingeleComment;
