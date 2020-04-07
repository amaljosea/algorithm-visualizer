
import React from 'react'

const FloodFill = () => {
    const width = 50
    const height = 50
    return (
        <>
            <h1>
                Flood Fill algorithm
        </h1>
            <table>
                {Array(height).fill().map(() => <tr>{Array(width).fill().map(() => <td></td>)}</tr>)}
            </table>
        </>
    )
}

export default FloodFill