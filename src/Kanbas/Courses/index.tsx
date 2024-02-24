import React from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import { courses } from "../Database/index.tsx";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation/index.tsx";
import Modules from "./Modules/index.tsx";
import Home from "./Home/index.tsx";
import Assignments from "./Assignments/index.tsx";


function Courses() {
    const location = useLocation();
    const pathSegments = location.pathname.split('/'); // Split the pathname into segments
    const courseNav = pathSegments[4];
    const params = useParams();
    const { courseID } = params;
    const course = courses.find((course) => course._id === courseID);
    

    return (
        <div>
            <h2><HiMiniBars3 /> {course?.number} {course?.name} | {courseNav}</h2>
            <hr/>
            <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />

            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />

            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

        </div>
        
    )
}
export default Courses;