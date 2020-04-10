import React from 'react'
import './Menu.css'
const Menu = ({ children }) => {
    return <div
        className="menu-container"
        style={{
            height: 100,
            width: "100vw",
            border: "3px solid black",
            position: "absolute",
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}>
        {children}
    </div>
}

export default Menu