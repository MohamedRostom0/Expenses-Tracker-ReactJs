import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const selectHandler = (event) => {
    props.onOptionSelected(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter">Filter by year</label>
        <select onChange={selectHandler} value={props.selected}>
          <option value="2022" className="expenses-filter">
            2022
          </option>
          <option value="2021" className="expenses-filter">
            2021
          </option>
          <option value="2020" className="expenses-filter">
            2020
          </option>
          <option value="2019" className="expenses-filter">
            2019
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
