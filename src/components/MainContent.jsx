import React from 'react'

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
                this is tasks
            </div>
        )
    }
}

export default MainContent
