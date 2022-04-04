import React from 'react';
import { useSelector } from 'react-redux';
import { Audio } from  'react-loader-spinner'

const Spiner = () => {
    const spiner = useSelector(state => state.loadingReduser.loading)
    return (
        <div className='loader-styles'>
            <Audio
                type="TailSpin"
                color="#00BFFF"
                width={100}
                height={100}
                visible={spiner}
            />
        </div>
    );
}

export default Spiner;
