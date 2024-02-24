import React from "react";
import JavaScript from "./JavaScript/index.tsx";
import PathParameters from "./routing/PathParameters.tsx";
import Classes from "./Classes/index.tsx";
import Styles from "./Styles/index.tsx";
import ConditionalOutput from "./ConditionalOutput/index.tsx";
import Highlight from "./Highlight.tsx";
import Add from "./Add.tsx";
import TodoList from "./todos/TodoList.tsx";





function Assignment3() {
    return (
      <div className="container">
            <h1>Assignment 3</h1>
            <ConditionalOutput />
            <Highlight>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
            vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <Add a={3} b={4} />
            <TodoList/>
            <Styles/>
            <Classes/>
            <PathParameters/>
            <JavaScript/>
      </div>
    );
  }
export default Assignment3;
  
  