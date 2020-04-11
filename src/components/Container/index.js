import React from 'react'

const Container = ({ children }) => {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%"
    }}>
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100vw",
        }}>
            <a href="https://github.com/howareyouami/algorithm-visualizer" target="blank" style={{margin:10}}>github</a>
        </div>
        {children}</div>
}

export default Container