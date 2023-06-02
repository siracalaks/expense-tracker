import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeExpense } from "../../redux/actions/expenses";
import "./Card.css";
import { toast } from "react-toastify";


const Card = ({ item }) => {

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeExpense(item));
    toast.error("Expenses deleted")
  };
  
  return (
    <>
      <div className="col-lg-8 card">
        <div className="mb-lg-0 time">
          <span>{item.formattedDate}</span>
        </div>
        <div className="flex-column flex-md-row">
          <p className=" p-md-0 mb-3">{item.title}</p>
          <mark className=" px-md-3 bg-success text-danger border rounded ">${item.amount}</mark>
          <p className=" p-md-0 mt-md-3">{item.category}</p>
        </div>
        <a className="btn btn-outline-danger">
          <AiOutlineDelete onClick={handleDelete} />
        </a>
      </div>
    </>
  );
};

export default Card;
