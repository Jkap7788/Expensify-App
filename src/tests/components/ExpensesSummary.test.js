import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary'

test('Should render ExpensesSummary correctly with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={50.2} />)
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpensesSummary correctly with multiple or zero expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={150.75} />)
    expect(wrapper).toMatchSnapshot()
})