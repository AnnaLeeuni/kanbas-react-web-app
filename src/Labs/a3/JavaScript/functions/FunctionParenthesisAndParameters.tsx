import React from "react";

function FunctionParenthesisAndParameters() {
    const square  = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <>
            <h3>Parenthesis And Parameters</h3>
            twoSquared = {square(2)}<br />
            square(2) = {4}<br />
            threePlusOne = {4}<br />
            plusOne(3) = {plusOne(3)}
        </>
    )

}
export default FunctionParenthesisAndParameters;