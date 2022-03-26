import { faColonSign, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ChoseOne from '../choseOne/ChoseOne';
import './Display.css'

const Display = (props) => {
    // const [catName, setName] = useState([]);
    const { displayCat } = props;

    // const count = displayCat.length;
    // const randomClick = () => {
    //     const number = Math.floor(Math.random() * count);
    //     const selectionCat = displayCat[number];
    //     setName(selectionCat)
    // }


    return (
        <div>
            <h1 className='headline'>Your favorite Cat <FontAwesomeIcon className='icon' icon={faSmile}></FontAwesomeIcon>  </h1>

            {
                displayCat.map(cat => <li className='list' key={cat.id}>

                    <img className='cat-img' src={cat.pic} alt="" />
                    <p className='cat-name'>{cat.name}</p>

                </li>)
            }

            {/* <button className='choice-btn' onClick={() => { removeItem() }}> remove </button> */}


        </div>
    );
};

export default Display;