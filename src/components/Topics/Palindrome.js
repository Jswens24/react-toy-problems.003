import React, { useState } from 'react';

const Palindrome = () => {
    const [userInput, setUserInput] = useState('');
    const [palindrome, setPalindrome] = useState('');

    const inputChangeHandler = (event) => {
        setUserInput(event.target.value);
    };

    const buttonHandler = () => {
        const userInputArr = userInput.split('');
        const reversedArr = userInputArr.reverse();
        const joinArr = reversedArr.join('');
        if (userInput === joinArr) {
            setPalindrome('true');
        } else {
            setPalindrome('false');
        }
    }

    return (
        <div className='puzzleBox palindromePB'>
            <h4>Palindrome</h4>
            <input onChange={inputChangeHandler} className='inputLine' type='text' />
            <button onClick={buttonHandler} className='confirmationButton'>Button</button>
            <span className='resultsBox'>Palindrome: {palindrome}</span>
        </div>
    )
};

export default Palindrome;