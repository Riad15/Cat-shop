import React from 'react';

const RemoveItem = (props) => {
    const { removeItem } = props;
    return (
        <div>
            <button onClick={() => { removeItem() }}>remove item </button>
        </div>
    );
};

export default RemoveItem;