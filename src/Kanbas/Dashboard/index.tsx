import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database/index.tsx";

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h2>Published Courses (14)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}`}
                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name + "." + course.number}
                  </Link>
                  <p className="card-text">
                    {/* Display course name and date range */}
                    {course.name + "." + course._id} <br />
                    Start Date: {course.startDate} <br />
                    End Date: {course.endDate}
                  </p>
                  <Link to={`/Kanbas/Courses/${course._id}`} className="btn btn-primary">
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
