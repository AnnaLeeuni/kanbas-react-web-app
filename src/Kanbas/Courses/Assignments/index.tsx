import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database/index.tsx";
import './index.css';
function Assignments() {
  const { courseID } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseID);
  return (
    <>
          <div>  
              <br/>
        <input placeholder="Search for Assignments" type="search"/>
        <button type="button" name="Group">Group</button>
        <button type="button" name="Assignment">Assignment</button>
        <select>
            <option>Edit Assignment Dates</option>
        </select> <br/> <br/>
       </div> 
          
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
            <div className="ellipse">40% of Total</div>
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseID}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;