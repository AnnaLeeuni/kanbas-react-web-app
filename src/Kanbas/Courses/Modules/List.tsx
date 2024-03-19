import React, { useState } from "react";
import "./index.css";
import { db } from "../../Database/index.tsx";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer.ts";
import { KanbasState } from "../../store";


function ModuleList() {
  const { courseID } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();


  const modulesList = db.modules.filter((module) => module.course === courseID);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
      <li className="list-group-item module-add-form">
        <input
      className="module-name-input"
      placeholder="New Module"
      value={module.name}
      onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
    }
    />
    <textarea
      className="module-description-textarea"
      placeholder="New Description"
      value={module.description}
      onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
    }
    />
    <button
      className="add-module-button"
      onClick={() => dispatch(addModule({ ...module, course: courseID }))}
    > Add
    </button>
    <button className="update-module-button"
      onClick={() => dispatch(updateModule(module))}>
        Update
    </button>

      </li>


        {moduleList.filter((module) => module.course === courseID)
          .map((module, index) => (
          <li key={index}
          className={`list-group-item ${selectedModule._id === module._id ? 'selected-module' : ''}`}
              onClick={() => setSelectedModule(module)}>
      

            <div>
              <div className="module-header">
                <FaEllipsisV className="icon me-2" />
                <span className="module-name">{module.name}</span>
                  <span className="icon-group">
                  <button className="edit-module-button"
                    onClick={() => dispatch(setModule(module))}>
                    Edit
                  </button>

                  <button className="delete-module-button"
                    onClick={() => dispatch(deleteModule(module._id))}>
                    Delete
                  </button>
                  <FaCheckCircle className="icon text-success" />
                  <FaPlusCircle className="icon ms-2" />
                  <FaEllipsisV className="icon ms-2" />
                </span>
              </div>
              <p className="module-description">{module.description}</p>
            </div>

            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                    {lesson.description}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;

