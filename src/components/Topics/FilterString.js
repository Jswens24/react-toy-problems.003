import React, { useState } from 'react';

const FilterString = () => {
    const [unFilteredArr, setUnFilteredArr] = useState(["James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy"]);
    const [userInput, setUserInput] = useState('');
    const [filteredArr, setFilteredArr] = useState([]);

    const inputChangeHandler = (event) => {
        setUserInput(event.target.value)
    };

    const buttonHandler = () => {
        const resultArr = [];
        unFilteredArr.filter(name => {
            name.includes(userInput) && resultArr.push(name);
        });
        setFilteredArr(resultArr)
    }

    return (
        <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <span className='puzzleText'>{JSON.stringify(unFilteredArr)}</span>
            <input onChange={inputChangeHandler} className='inputLine' type='text' />
            <button onClick={buttonHandler} className='confirmationButton'>Button</button>
            <span className='resultsBox filterStringRB'>{JSON.stringify(filteredArr)}</span>
        </div>
    )
};

export default FilterString;