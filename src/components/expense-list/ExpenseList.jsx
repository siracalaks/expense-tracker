import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const ExpenseList = () => {
  const { expensesList: list, query } = useSelector((state) => state.expenses);
  const filteredList = list.filter((item) => item.title.includes(query));

  return (
    <div className="container mb-5">
      <div className="row cards flex-column justify-content-center align-items-center gap-4 mt-5 fw-bold ">
        <ToastContainer
          position="bottom-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
        />
        {filteredList.length ? (
          filteredList.map((item) => (
            <Card item={item} />
          ))
        ) : (
          <div class="alert alert-danger w-50 m-auto mt-5" role="alert">
            Your spending calendar is empty!
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
