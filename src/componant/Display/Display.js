import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Display.css'

const Display = (props) => {
    const { displayCat } = props;
    console.log(displayCat);

    return (
        <div>
            <h1 className='headline'>Your favorite Cat <FontAwesomeIcon className='icon' icon={faSmile}></FontAwesomeIcon>  </h1>

            {
                displayCat.map(cat => <li className='list' key={cat.id}>

                    <img className='cat-img' src={cat.pic} alt="" />
                    <p className='cat-name'>{cat.name}</p>

                </li>)
            }
        </div>
    );
};

export default Display;