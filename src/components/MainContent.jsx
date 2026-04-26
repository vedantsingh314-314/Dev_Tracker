import React from 'react'
import Tasks from './Tasks'
import GithubHeatmap from './GithubHeatmap'

const MainContent = ({ currentview }) => {
    if (currentview === "dashboard") {
        return <GithubHeatmap />
    } else if (currentview === "tasks") {
        return <Tasks />
    }
}

export default MainContent