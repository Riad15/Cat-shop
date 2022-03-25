import React from 'react';
import './Cat.css'

const Cat = (props) => {
    const { name, age, pic, price, gender } = props.cats;

    return (
        <div className='cat'>
            <img src={pic} alt="" />
            <div>
                <h4>Name: {name} </h4>
                <p>Age: {age}  || <span> Gender: {gender}</span></p>
                <h4>Price: {price}</h4>
            </div>
            <p className='btn'>add to card</p>
        </div>
    );
};

export default Cat;