import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget/Budget';
import ExpenseTotal from './components/ExpenseTotal/ExpenseTotal';
import ExpenseList from './components/ExpenseList/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm/AddExpenseForm';
import RemainingBudget from './components/Remaining/Remaining';

const App = () => (
  <AppProvider>
    <div className='container'>
      <h1 className='mt-3'>Мой планировщик бюджета</h1>
      <div className='row mt-3'>
        <div className='col-sm'><Budget /></div>
        <div className='col-sm'><RemainingBudget /></div>
        <div className='col-sm'><ExpenseTotal /></div>
      </div>
      <h3 className='mt-3'>Расходы</h3>
      <div className='row'>
        <div className='col-sm'><ExpenseList /></div>
      </div>
      <h3 className='mt-3'>Добавить расходы</h3>
      <div className='row mt-3'>
        <div className='col-sm'><AddExpenseForm /></div>
      </div>
    </div>
  </AppProvider>
);

export default App;