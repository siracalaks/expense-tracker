import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";
import './UserContent.css';


const UserContent = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };

  return (
    <div className="user-content ms-auto">
      {window.location.pathname === "/" ? (
        <div className="d-flex justify-content-center gap-5 my-4 user-content">
          <div className="content-search">
            <input
              value={query}
              className="border rounded me-4 input"
              type="text"
              name="text"
              placeholder="Search Valid"
              onChange={(e) => handleQuery(e)}
            />
            <BsSearch className="text-black" />
          </div>
          <Link to="/add-expense">
            <button type="button" className="btn btn-outline-success">
              <AiOutlinePlusCircle /> Add
            </button>
          </Link>
          
        </div>
      ) : (
        <div className="top-path d-flex justify-content-around my-5 user-content">
          <div className="top-path-back">
            <Link to="/">
              <button className="btn btn-outline-success">
                <BiArrowBack />
                Back
              </button>
            </Link>
          </div>
          <div className="top-path-cancel">
            <Link to="/">
              <button className="btn btn-outline-danger">
                <MdCancel />
                Cancel
              </button>            
            </Link>
           
          </div>
        </div>
      )}
    </div>
  );
};

export default UserContent;
