import { mockExpenses } from "../data/mock.js";

export const EXPENSES_STORAGE_KEY = "expenses";

export const getMockExpenses = () => {
  return mockExpenses;
};

export const getNextExpenseId = (expenses) => {
  if (expenses.length === 0) {
    return 1;
  }

  return Math.max(...expenses.map((expense) => Number(expense.id) || 0)) + 1;
};

export const writeExpenses = (expenses) => {
  localStorage.setItem(EXPENSES_STORAGE_KEY, JSON.stringify(expenses));
  return expenses;
};

export const ensureExpenses = () => {
  const storedExpenses = localStorage.getItem(EXPENSES_STORAGE_KEY);

  if (!storedExpenses) {
    return writeExpenses(getMockExpenses());
  }

  try {
    const parsedExpenses = JSON.parse(storedExpenses);

    if (!Array.isArray(parsedExpenses)) {
      return writeExpenses(getMockExpenses());
    }

    return parsedExpenses;
  } catch (error) {
    return writeExpenses(getMockExpenses());
  }
};
