import React, { useEffect, useState } from 'react';
import Cat from '../Cat/Cat';
import './Cats.css'

const Cats = () => {
    const [cats, setCates] = useState([]);
    useEffect(() => {
        fetch('cat-dat.json')
            .then(res => res.json())
            .then(data => setCates(data))
    }, [])

    return (
        <div className='cat-market'>
            <div className='cat-container'>
                {
                    cats.map(cat => <Cat key={cat.id} cats={cat} ></Cat>)
                }

            </div>
            <div className='cat-selection'>
                <h1>Selection your favorite Cat</h1>
            </div>

        </div>
    );
};

export default Cats;