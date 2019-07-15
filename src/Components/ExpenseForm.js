import React from 'react'
import { MdSend } from 'react-icons/md'
const ExpenseForm = ({ charge, amount, handleCharge, handleAmount, handleSubmit  }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <input
                        type="text"
                        className="form-control"
                        id="charge"
                        name="charge"
                        placeholder={charge ? charge : "e.g. Rent"}
                        onChange={handleCharge}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">amount</label>
                    <input
                        type="number"
                        className="form-control"
                        id="amount"
                        name="amount"
                        placeholder={amount ? amount : 'e.g. £300'}
                        onChange={handleAmount}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn">
                        Add <MdSend className="btn-icon" />
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm
