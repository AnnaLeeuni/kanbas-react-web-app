import React from "react";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse.tsx";
import ConditionalOutputInline from "./ConditionalOutputInline.tsx";

function ConditionalOutput() {
    return (
        <div>
            <ConditionalOutputIfElse />
            <ConditionalOutputInline/>
        </div>
    )
};

export default ConditionalOutput;