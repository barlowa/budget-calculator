import React from 'react'
import ExpenseForm from './ExpenseForm'
import { MdEdit, MdDelete } from 'react-icons/md'

const ExpenseItem = ({ expense, handleEdit, handleSubmit, handleDelete, handleCharge, edit, handleAmount }) => {
    const { id, charge, amount } = expense
    console.log(amount)
    return (
        <li className="item">
            <div className="info">
                {
                    edit ?
                        <ExpenseForm
                            charge={charge}
                            amount={amount}
                            handleCharge={handleCharge}
                            handleAmount={handleAmount}
                            handleSubmit={handleSubmit}
                        />
                        :
                        <>
                            <span className="expense">{charge}</span>
                            <span className="amount">£{amount}</span>
                        </>
                }
            </div>
            <div>
                <button className="edit-btn" aria-label="edit button" onClick={() => handleEdit(id)}>
                    <MdEdit />
                </button>
                <button className="clear-btn" aria-label="delete button" onClick={() => handleDelete(id)}>
                    <MdDelete />
                </button>
            </div>
        </li>
    )
}

export default ExpenseItem

