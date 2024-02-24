import React from "react";
import ModuleList from "../Modules/List.tsx";
import './styles.css';
import Status from "./Status.tsx";

function Home() {
    return (
      

        <div>
            <br/>
    <button type="button">Collapse All</button>
    <button type="button">View Progress</button> 
    <select>
        <option id="publish all">Publish All</option>
    </select> 
    <button type="button">Module</button> <br /> 

            <hr />
            
      <div className="container-fluid">
      <div className="row">
        {/* ModuleList occupies the remaining space */}
        <div className="col-md">
          <ModuleList />
        </div>
        {/* Status column has a fixed width on md screens and above, hidden on smaller screens */}
        <div className="col-md-auto d-none d-md-block">
          <Status/>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Home;

