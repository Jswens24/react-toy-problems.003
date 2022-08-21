import React, { useState } from "react";

const EvenAndOdd = () => {

    const [evenArr, setEvenArr] = useState([]);
    const [oddArr, setOddArr] = useState([]);
    const [userInput, setUserInput] = useState('');

    const inputHandler = (event) => {
        setUserInput(event.target.value);
    }

    const clickHandler = () => {
        const evens = [];
        const odds = [];
        let userStr = userInput.split(',');

        for (let i = 0; i < userStr.length; i++) {
            if (userStr[i] % 2 === 0) {
                evens.push(+userStr[i]);
            } else {
                odds.push(+userStr[i]);
            };
        }
        setEvenArr(evens);
        setOddArr(odds);
    }



    return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" type='text' onChange={inputHandler} />
            <button className="confirmationButton" onClick={clickHandler}>Button</button>
            <span className="resultsBox">Evens: {JSON.stringify(evenArr)}</span>
            <span className="resultsBox">Odds: {JSON.stringify(oddArr)}</span>
        </div>
    )
};

export default EvenAndOdd;