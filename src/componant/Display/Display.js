import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './Display.css'

const Display = (props) => {
    const [catName, setName] = useState([]);
    // const [cats, setCats] = useState([]);
    const { displayCat } = props;
    // setCats(displayCat);
    // console.log(cats);
    const count = displayCat.length;
    const randomClick = (count) => {
        const number = Math.floor(Math.random() * count);
        const selectionCat = displayCat[number];
        setName(selectionCat)
    }


    return (
        <div>
            <h1 className='headline'>Your favorite Cat <FontAwesomeIcon className='icon' icon={faSmile}></FontAwesomeIcon>  </h1>

            {
                displayCat.map(cat => <li className='list' key={cat.id}>

                    <img className='cat-img' src={cat.pic} alt="" />
                    <p className='cat-name'>{cat.name}</p>

                </li>)
            }
            <h1 style={{}}>you can take {catName.name}</h1>
            <button className='choice-btn' onClick={() => { randomClick(count) }}> chose 1 for me </button>
        </div>
    );
};

export default Display;