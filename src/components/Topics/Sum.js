import React, { useState } from 'react';

const Sum = () => {
    const [numberOne, setNumberOne] = useState(0);
    const [numberTwo, setNumberTwo] = useState(0);
    const [sum, setSum] = useState(null);

    const firstInputHandler = (event) => {
        setNumberOne(event.target.value);
    };

    const secondInputHandler = (event) => {
        setNumberTwo(event.target.value);
    };

    const clickHandler = () => {
        const resultSum = +numberOne + +numberTwo;
        setSum(resultSum);
    }


    return (
        <div className='puzzleBox sumPB'>
            <h4>Sum</h4>
            <input onChange={firstInputHandler} className='inputLine' type='text' />
            <input onChange={secondInputHandler} className='inputLine' type='text' />
            <button onClick={clickHandler} className='confirmationButton'>Button</button>
            <span className='resultsBox'>{sum}</span>
        </div>
    )
};

export default Sum;