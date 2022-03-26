import React, { useEffect, useState } from 'react';
import Cat from '../Cat/Cat';
import ChoseOne from '../choseOne/ChoseOne';
import Display from '../Display/Display';
import RemoveItem from '../RemoveItem/RemoveItem';
import './Cats.css'

const Cats = () => {
    const [cats, setCates] = useState([]);
    const [displayCat, setDisplayCat] = useState([]);
    const [catName, setName] = useState([]);
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
    const count = displayCat.length;
    const randomClick = () => {
        const number = Math.floor(Math.random() * count);
        const selectionCat = displayCat[number];
        setName(selectionCat)
    }

    const removeItem = () => {
        setDisplayCat([]);
        setName([]);

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
                <Display removeItem={removeItem} displayCat={displayCat} ></Display>
                <ChoseOne cat={catName}
                    randomClick={randomClick}></ChoseOne>
                <RemoveItem removeItem={removeItem}></RemoveItem>
            </div>

        </div>
    );
};

export default Cats;