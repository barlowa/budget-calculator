import React, { useState, useEffect } from 'react';
import './App.css';
import ExpenseList from './Components/ExpenseList'
import ExpenseForm from './Components/ExpenseForm'
import Alert from './Components/Alert'
import uuid from 'uuid/v4'

// const initialExpenses = [
//   { id: uuid(), charge: "rent", amount: 1600 },
//   { id: uuid(), charge: "car payment", amount: 400 },
//   { id: uuid(), charge: "credit card bill", amount: 1200 },
// ]

const initialExpenses = localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')): []

function App() {
  //all expenses, add expenses
  const [expenses, setExpenses] = useState(initialExpenses)
  //single expense 
  const [charge, setCharge] = useState('')
  //single amount
  const [amount, setAmount] = useState('')
  //alert
  const [alert, setAlert] = useState({ show: false })
  //edit
  const [edit, setEdit] = useState(false)
  //edit item 
  const [id, setId] = useState(0)

  useEffect(() => {
    console.log('we called a use effect')
    localStorage.setItem('expenses', JSON.stringify(expenses))
  },[expenses])

  const handleCharge = event => {
    setCharge(event.target.value)
  }

  const handleAmount = event => {
    setAmount(event.target.value)
  }

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => {
      setAlert({ show: false })
    }, 3000)
  }

  const clearItems = () => {
    setExpenses([])
    handleAlert({ type: 'danger', text: 'All Items removed' })
  }

  const handleDelete = (id) => {
    let expensesWithoutItem = expenses.filter(item => item.id !== id)
    setExpenses(expensesWithoutItem)
    handleAlert({ type: 'danger', text: 'Item removed' })
  }

  const handleEdit = (id) => {
    let expense = expenses.find(item => item.id === id)
    let { charge, amount } = expense
    setCharge(charge)
    setAmount(amount)
    setEdit(!edit)
    setId(id)
  }


  const handleSubmit = event => {
    event.preventDefault()
    if (charge !== "" && amount > 0) {

      if (edit) {
        const editedExpense = expenses.map( item =>(
          item.id === id ? { ...item, charge, amount} : item
        ))
        setExpenses(editedExpense)
        setEdit(false)
      } else {
        const newExpense = {
          id: uuid(),
          charge,
          amount
        }
        setExpenses([...expenses, newExpense])
        handleAlert({ type: 'success', text: 'Item added ' })
      }
      setCharge('')
      setAmount('')
    } else {
      handleAlert({ type: 'danger', text: "Charge value cannot be empty and amount must be bigger than 0" })
    }
  }
  return (
    <React.Fragment>
      {
        alert.show &&
        <Alert
          type={alert.type}
          text={alert.text}
        />
      }
      <h1>Budget Calculator</h1>
      <main className="App">
        {
          !edit &&
          <ExpenseForm
            charge={charge}
            amount={amount}
            handleCharge={handleCharge}
            handleAmount={handleAmount}
            handleSubmit={handleSubmit}
          />
        }
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
          amount={amount}
        />
      </main>
      { 
        expenses.length > 0 &&
        <h1>
          total spending: <span className="total">£{expenses.reduce((accumulator, currentItem) => {
            return accumulator += parseInt(currentItem.amount)
          }, 0)}</span>
        </h1>
      }

    </React.Fragment>
  );
}

export default App;
