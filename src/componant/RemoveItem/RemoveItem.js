import React from 'react';
import './RemoveItem.css'

const RemoveItem = (props) => {
    const { removeItem } = props;
    return (
        <div>
            <button className='remove-btn' onClick={() => { removeItem() }}>remove item </button>
        </div>
    );
};

export default RemoveItem;