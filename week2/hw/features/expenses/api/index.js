import { ensureExpenses, getNextExpenseId, writeExpenses } from "../storage/index.js";

export const getExpenses = () => {
  const expenses = ensureExpenses();

  return [...expenses].sort((a, b) => {
    if (a.date === b.date) {
      return Number(b.id) - Number(a.id);
    }

    return b.date.localeCompare(a.date);
  });
};

export const addExpense = (expense) => {
  const expenses = ensureExpenses();
  const newExpense = {
    ...expense,
    id: getNextExpenseId(expenses),
  };

  writeExpenses([...expenses, newExpense]);
  return newExpense;
};

export const deleteExpense = (id) => {
  const expenseId = Number(id);
  const expenses = ensureExpenses();
  const nextExpenses = expenses.filter((expense) => Number(expense.id) !== expenseId);
  const deleted = nextExpenses.length !== expenses.length;

  if (deleted) {
    writeExpenses(nextExpenses);
  }

  return deleted;
};
