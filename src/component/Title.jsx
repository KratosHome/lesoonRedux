import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputText } from '../redux/action';
import { inputReduser } from '../redux/inputReduser';

const Title = (props) => {
    
    const text = useSelector(state => {
        const { inputReduser } = state;
        return inputReduser.text
    }) / получати
   
    const dispatch = useDispatch() // відправляти  
    const handelChange = (e) => {
        // console.log(e.target.value)
        dispatch(inputText(e.target.value))
    }

    return (
        <div className='card-title'>
            <div className='card-title-top'>
                <input type="text" onChange={handelChange} />
            </div>
            <p>{text}</p>
        </div>
    );
}

export default Title;
