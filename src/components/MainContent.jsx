import React from 'react'
import Tasks from './Tasks'

const MainContent = ({currentview}) => {
    if (currentview === "dashboard") {
        return (
            <div style={{ border: '1px solid red', padding: '10px' }}>
                this is dashboard
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
