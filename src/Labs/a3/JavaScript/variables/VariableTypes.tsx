import React from "react";

function VariableTypes() {
    let numberVariable = 123;
    let floatingPointNumber = 234.345;
    let stringVariable = 'Hello World!';
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    return(
      <div>
        <h2>Variables Types</h2>
            numberVariable = {numberVariable}<br />
            {/* number is converted to string  */}
        floatingPointNumber = { floatingPointNumber }<br/>
        stringVariable = { stringVariable }<br/>
            booleanVariable = {booleanVariable + ""}<br />
            {/* boolean has to force into string or will not be render*/}
        isNumber = { isNumber }<br/>
        isString = { isString }<br/>
        isBoolean = { isBoolean }<br/>
      </div>
    );
  }
  export default VariableTypes
  