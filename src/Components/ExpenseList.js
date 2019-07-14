import React from 'react'
import ExpenseItem from "./ExpenseItem"
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
    return (
        <React.Fragment>
            <ul className="list">
                {expenses.map( expense =>( 
                    <ExpenseItem 
                        key={ expense.id }
                        expense={ expense }
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
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
