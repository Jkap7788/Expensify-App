import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = (props) => (
    <div>
        <p>
            Viewing {props.expensesCount}
            {props.expensesCount === 1 ? <span> expense </span> : <span> expenses </span>}
            totalling {numeral(props.expensesTotal / 100).format('$0,0.00')}
        </p>

    </div>

)

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesCount: expenses.length,
        expensesTotal: selectExpensesTotal(expenses)
    }
}

export default connect(mapStateToProps, undefined)(ExpensesSummary)