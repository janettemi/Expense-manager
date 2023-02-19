import React from "react";
import Chart from "./Chart/Chart";

const ExpenseChart = (props) => {
    const chartDataPoint = [
        {lable: 'jan',value:0 },
        {lable: 'feb',value:0},
        {lable: 'mar',value:0},
        {lable: 'apr',value:0},
        {lable: 'may',value:0},
        {lable: 'jun',value:0},
        {lable: 'july',value:0},
        {lable: 'aug',value:0},
        {lable: 'sep',value:0},
        {lable: 'oct',value:0},
        {lable: 'nov',value:0},
        {lable: 'dec',value:0},
    ];
    for(const expense of props.expense) {
        const expenseMonth = expense.date.getMonth();//starting  at 0 =>january=>0
        chartDataPoint[expenseMonth].value += expense.amount;

    }

    return <Chart dataPoints={chartDataPoint}></Chart>
}
   
export default ExpenseChart