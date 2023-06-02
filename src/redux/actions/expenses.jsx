import { ADD_EXPENSE, REMOVE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses";

export const addExpense = (data) => {
  console.log(data);
  return {
    type: ADD_EXPENSE,
    data,
  };
};

export const removeExpense = (data) => {
  return {
    type: REMOVE_EXPENSE,
    data,
  };
};

export const searchExpense = (query) => {
  return {
    type: SEARCH_EXPENSE,
    query,
  }
}
