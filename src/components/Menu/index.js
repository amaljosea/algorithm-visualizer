import React from 'react'

const Menu = ({ children }) => {
    return <div style={{ height: 100, width: "100vw", border: "3px solid black", position: "absolute", bottom: 0 }}>
        {children}
    </div>
}

export default Menu