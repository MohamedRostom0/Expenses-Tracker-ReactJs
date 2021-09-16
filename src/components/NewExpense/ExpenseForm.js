import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const [titleInput, setTitleInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [amountInput, setAmountInput] = useState("");
  // const [formInput, setFormInput] = useState({
  //   titleInput: "",
  //   dateInput: "",
  //   amountInput: "",
  // });

  const titleChangeHandler = (event) => {
    setTitleInput(event.target.value);

    // setFormInput((prevState) => {
    //   return { ...prevState, titleInput: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmountInput(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDateInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent the reload of the page

    const expenseData = {
      title: titleInput,
      date: new Date(dateInput),
      amount: +amountInput,
    };

    setTitleInput("");
    setDateInput("");
    setAmountInput("");

    props.onSaveExpenseData(expenseData);
    showFormHandler();
  };

  const showFormHandler = () => {
    setFormIsVisible((prevState) => !prevState);
  };

  if (formIsVisible) {
    return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={titleInput}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={amountInput}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={dateInput}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={showFormHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  } else {
    return (
      <div>
        <button onClick={showFormHandler}>Add new expense</button>
      </div>
    );
  }
};

export default ExpenseForm;
