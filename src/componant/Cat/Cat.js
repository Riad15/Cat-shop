import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cat.css'

const Cat = (props) => {
    const { cat, addTodisplay } = props;
    const { name, age, pic, price, gender } = cat;

    return (
        <div className='cat'>
            <img src={pic} alt="" />
            <div className='cat-info'>
                <h4>Name: {name} </h4>
                <p>Age: {age}  || <span> Gender: {gender}</span></p>
                <h4>Price: {price}</h4>
            </div>
            <p className='btn' onClick={() => { addTodisplay(cat) }}>add to card <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </p>
        </div>
    );
};

export default Cat;