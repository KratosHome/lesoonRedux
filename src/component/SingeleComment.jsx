import React, { useEffect, useState } from 'react';
import { commentDelete, commentUpdate } from '../redux/action';
import { useDispatch } from 'react-redux';

const SingeleComment = ({ data }) => {
    const [comentText, setComentText] = useState("")
    const { text, id } = data;

    const dispatch = useDispatch()

    // оновлення кожного з коментарів 
    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(commentUpdate(comentText, id))
    }

    const handelDelete = (e) => {
        e.preventDefault()
        dispatch(commentDelete(id))
    }


    useEffect(() => {
        if (text) {
            setComentText(text)
        }
    }, [text])

    const handelInput = (e) => {
        setComentText(e.target.value)
    }




return (
    <form onSubmit={handleUpdate} className='comments-item'>
        <div onClick={handelDelete} className='comments-item-delete'>&times;</div>
        <input type="text" value={comentText} onChange={handelInput} />
        <input type="submit" hidden />
    </form>
);
}

export default SingeleComment;
