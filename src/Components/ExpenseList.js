import React from 'react'
import ExpenseItem from "./ExpenseItem"
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems, edit, handleAmount, handleCharge, handleSubmit, amount }) => {
    return (
        <React.Fragment>
            <ul className="list">
                {expenses.map( expense =>( 
                    <ExpenseItem 
                        key={ expense.id }
                        expense={ expense }
                        handleDelete={handleDelete}
                        edit={ edit }
                        handleEdit={handleEdit}
                        handleAmount={handleAmount}
                        handleSubmit={handleSubmit}
                        amount={expense.amount}
                        handleCharge={handleCharge}
                    />
                ))}
            </ul>
            { 
                expenses.length > 0 && 
                <button className="btn" onClick={clearItems}>
                    clear expenses <MdDelete  className="btn-icon"/>
                </button>
            }
        </React.Fragment>
    )
}

export default ExpenseList
