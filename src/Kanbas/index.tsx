import React from "react";

import { Link } from "react-router-dom";
import Nav from "../Nav.tsx";
import KanbasNavigation from "./Navigation/index.tsx";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard/index.tsx";
import Courses from "./Courses/index.tsx";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />

           <Route path="/Account" element={<h1>Account</h1>} />
           <Route path="/Dashboard" element={<Dashboard/>} />
           <Route path="/Courses/:courseID/*" element={<Courses/>} />
           <Route path="/Calendar" element={<h1>Calendar</h1>} />
           <Route path="/Groups" element={<h1>Groups</h1>} />
           <Route path="/Inbox" element={<h1>Inbox</h1>} />
           <Route path="/History" element={<h1>History</h1>} />
           <Route path="/Commons" element={<h1>Commons</h1>} />
           <Route path="/Studio" element={<h1>Studio</h1>} />
           <Route path="/Help" element={<h1>Help</h1>} />
                      
        </Routes>
      </div>
    </div>
  );
}


// function Kanbas() {
//    return (
//      <div className="d-flex">
       
//          <KanbasNavigation/>
       
//        <div style={{ flexGrow: 1 }}>
//          <Routes>
           
//            <Route path="/Account" element={<h1>Account</h1>} />
//            <Route path="/Dashboard" element={<h1>Dashboard</h1>} />
//            <Route path="/Courses" element={<h1>Courses</h1>} />
//            <Route path="/Calendar" element={<h1>Calendar</h1>} />
//            <Route path="/Groups" element={<h1>Groups</h1>} />
//            <Route path="/Inbox" element={<h1>Inbox</h1>} />
//            <Route path="/History" element={<h1>History</h1>} />
//            <Route path="/Commons" element={<h1>Commons</h1>} />
//            <Route path="/Studio" element={<h1>Studio</h1>} />
//            <Route path="/Help" element={<h1>Help</h1>} />
           
//          </Routes>
         
//        </div>
//      </div>
//  );}
 export default Kanbas;