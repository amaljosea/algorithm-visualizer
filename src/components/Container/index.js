import React from 'react'

const Container = ({ children }) => {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%"
    }}>{children}</div>
}

export default Container