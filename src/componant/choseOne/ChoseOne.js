import React from 'react';
import './CoseOne.css'

const ChoseOne = (props) => {
    const { randomClick, cat } = props;
    // console.log(cat);
    return (
        <div>
            <h4 className='text'>you can buy : </h4>
            <div className='contain'>
                <img className='cat-img' src={cat.pic} alt="" />
                <p className='cat-name'>{cat.name}</p>
            </div>
            <button className='choice-btn' onClick={() => { randomClick() }}> chose 1 for me </button>
        </div>
    );
};

export default ChoseOne;