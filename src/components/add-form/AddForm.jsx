import React, { useState } from "react";
import "./AddForm.css";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import { ToastContainer, toast } from "react-toastify";
import SuccessModal from "./SuccesModal";
import "react-toastify/dist/ReactToastify.css";

const AddForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const currentDate = new Date();
  const formattedDate =
    currentDate.getFullYear() +
    "-" +
    (currentDate.getMonth() + 1) +
    "-" +
    currentDate.getDate().toString();
    

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    } else {
      setAmount(val);
    }
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Please enter valid data!");
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Input giriş değerlerini ekleyiniz!");
      notify();
      return;
    }

    const data = {
      title,
      amount,
      category,
      formattedDate,
    };
    // console.log(data);
    setTitle("");
    setAmount("");
    setCategory("");

    dispatch(addExpense(data));
    setModalOpen(true);
    console.log(data);
  };

  return (
    <div>
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
      />
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center form-parent gap-3 mt-5">
          <div className=" col-lg-5  mb-3">
            <label className="">Title</label>
            <input
              value={title}
              type="text"
              className="form-control"
              placeholder="Entered Title"
              onChange={handleTitle}
            />
          </div>
          <div className=" col-lg-5  mb-3">
            <label className="">Amount</label>
            <input
              value={amount}
              type="text"
              className="form-control"
              placeholder="$30"
              onChange={handleAmount}
            />
          </div>
          <select
            defaultValue={category}
            onChange={handleCategory}
            className=" col-lg-5"
            placeholder="Category"
            aria-label="Default select example"
          >
            <option selected>Category</option>
            <option value="Education">Education</option>
            <option value="Activity">Activity</option>
            <option value="Shopping">Home Shopping</option>
          </select>
          <button
            type="submit"
            className="btn btn-outline-success m-auto px-5"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddForm;
