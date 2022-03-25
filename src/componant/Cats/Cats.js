import React, { useEffect, useState } from 'react';
import Cat from '../Cat/Cat';
import Display from '../Display/Display';
import './Cats.css'

const Cats = () => {
    const [cats, setCates] = useState([]);
    const [displayCat, setDisplayCat] = useState([]);
    useEffect(() => {
        fetch('cat-dat.json')
            .then(res => res.json())
            .then(data => setCates(data))
    }, [])

    const addTodisplay = (cat) => {
        // console.log(cat);
        let newCat = [];
        newCat = [...displayCat, cat];
        setDisplayCat(newCat)
    }

    return (
        <div className='cat-market'>
            <div>
                <div className='heading'>
                    <h1>Never had you seen such a beautiful cat...</h1>
                </div>
                <div className='cat-container'>
                    {
                        cats.map(cat => <Cat
                            key={cat.id}
                            cat={cat}
                            addTodisplay={addTodisplay} ></Cat>)
                    }

                </div>
            </div>
            <div className='cat-selection'>
                <Display displayCat={displayCat} ></Display>
            </div>

        </div>
    );
};

export default Cats;