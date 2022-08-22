import React, { useState } from 'react';

const FilterObject = () => {
    const [unFilteredArr, setUnFilteredArr] = useState([{ "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schroeder", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" }]);
    const [userInput, setUserInput] = useState('');
    const [filteredArr, setFilteredArr] = useState([]);

    const inputChangeHandler = (event) => {
        setUserInput(event.target.value);
    };

    const buttonHandler = () => {
        const resultArr = [];
        unFilteredArr.filter(word => {
            word.hasOwnProperty(userInput) && resultArr.push(word)
        });
        setFilteredArr(resultArr);
    };

    return (
        <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <span className='puzzleText'>{JSON.stringify(unFilteredArr)}</span>
            <input onChange={inputChangeHandler} className='inputLine' type='text' />
            <button onClick={buttonHandler} className='confirmationButton'>Button</button>
            <span className='resultsBox filterObjectRB'>{JSON.stringify(filteredArr)}</span>
        </div>
    )
};

export default FilterObject;