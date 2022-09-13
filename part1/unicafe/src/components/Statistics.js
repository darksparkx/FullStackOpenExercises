import React from 'react'
import StatisticLine from './StatisticLine'

const Statistics = ({ good, bad, neutral, total, average }) => {

    if (total > 0) {
        return (
            <div>
                <h1>Statistics</h1>

                <table>
                    <tbody>
                        <StatisticLine text="good" value={good} />
                        <StatisticLine text="neutral" value={neutral} />
                        <StatisticLine text="bad" value={bad} />
                        <StatisticLine text="all" value={total} />
                        <StatisticLine text="average" value={average / total} />
                        <StatisticLine text="positive" value={(good / total) * 100} />
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </div>
        )
    }

}

export default Statistics