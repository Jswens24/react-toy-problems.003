import React, { useState } from "react";

const EvenAndOdd = () => {

    return (
        <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
            <input className="inputLine" type='text' />
            <button className="confirmationButton">Button</button>
            <span className="resultsBox">span1</span>
            <span className="resultsBox">span2</span>
        </div>
    )
};

export default EvenAndOdd;