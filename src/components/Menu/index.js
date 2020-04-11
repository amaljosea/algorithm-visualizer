import React from 'react'
import './Menu.css'
const Menu = ({ children }) => {
    return <div
        className="menu-container"
        style={{
            width: "100vw",
            position: "absolute",
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "silver",
            overflow: "scroll",
            padding: "0px 50px"
        }}>
        {children}
    </div>
}

export default Menu