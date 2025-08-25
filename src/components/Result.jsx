import { formatter } from "../util/investment.js"

export default function Result({ year, investmentValue, yearlyInterest, totalInterest, investedCapital }) {
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{year}</td>
                    <td>{formatter.format(investmentValue)}</td>
                    <td>{formatter.format(yearlyInterest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(investedCapital)}</td>
                </tr>
            </tbody>
        </table>
    )
}