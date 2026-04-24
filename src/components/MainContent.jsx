import React from 'react'
import Tasks from './Tasks'
import GithubHeatmap from './GithubHeatmap'

const MainContent = ({ currentview }) => {
    if (currentview === "dashboard") {
        return (
            <div style={{ border: '1px solid red', padding: '10px' }}>
                <div className="your-dashboard-wrapper">
                    <GithubHeatmap />
                </div>
            </div>
        )
    } else if (currentview === "tasks") {
        return (
            <div style={{ border: '1px solid red', padding: '10px' }}>
                <Tasks />
            </div>
        )
    }
}

export default MainContent
