import React from "react";
import VariablesAndConstants
    from "./variables/VariablesAndConstants.tsx";
import VariableTypes from "./variables/VariableTypes.tsx";
import BooleanVariables from "./variables/BooleanVariables.tsx";
import IfElse from "./conditionals/IfElse.tsx";
import TernaryOperator from "./conditionals/TernaryOperator.tsx";
import ES5Functions from "./functions/ES5Functions.tsx";
import ArrowFunctions from "./functions/ArrrowFunctions.tsx";
import ImpliedReturn from "./functions/ImpliedReturn.tsx";
import FunctionParenthesisAndParameters from "./functions/FunctionParenthesisAndParameters.tsx";
import WorkingWithArrays from "./arrays/WorkingWithArrays.tsx";
import ArrayIndexAndLength from "./arrays/ArrayIndexAndLength.tsx";
import AddingAndRemovingDataToFromArrays from "./arrays/AddingAndRemovingDataToFromArrays.tsx";
import ForLoops from "./arrays/ForLoops.tsx";
import MapFunction from "./arrays/MapFunction.tsx";
import JsonStringify from "./json/JsonStringify.tsx";
import FindFunction from "./arrays/FindFunction.tsx";
import FindIndex from "./arrays/FindIndex.tsx";
import FilterFunction from "./arrays/FilterFunction.tsx";
import TemplateLiterals from "./string/TemplateLiterals.tsx";
import House from "./json/House.tsx";
import Spreading from "./json/Spreading.tsx";
import Destructing from "./json/Destructing.tsx";
import FunctionDestructing from "./functions/FunctionDestructing.tsx";
import ConditionalOutput from "../ConditionalOutput/index.tsx";
  
function JavaScript() {
    console.log('Hello World!');

    return(
       <div>
            <h1>JavaScript</h1>
            <VariablesAndConstants />
            <VariableTypes />
            <BooleanVariables />
            <IfElse />
            <TernaryOperator />
            <ES5Functions />
            <ArrowFunctions />
            <ImpliedReturn />
            <FunctionParenthesisAndParameters />
            <WorkingWithArrays />
            <ArrayIndexAndLength />
            <AddingAndRemovingDataToFromArrays />
            <ForLoops />
            <MapFunction />
            <JsonStringify />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
            <TemplateLiterals />
            <House />
            <Spreading />
            <Destructing />
            <FunctionDestructing />
       </div>
    );
 }
 export default JavaScript