import React from "react";

const Result = ({ score, playAgain }) => {
    return (
        <div className="score-board">
            <h2 className="score">You scored {score}!</h2>
            <button className="playBtn" onClick={playAgain}>Play again</button>
        </div>
    )
};

export default Result;