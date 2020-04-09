
import React, { useState } from 'react'
import './FloodFill.css'
import { floodFillAlgo } from './algorithm'

const FloodFill = () => {
    const initialImage = [
        ["#f44336", "#f44336", "#f44336", "#f44336", "#f44336"],
        ["#f44336", "#f44336", "#f44336", "#f44336", "#f44336"],
        ["#f44336", "#f44336", "#f44336", "#f44336", "#f44336"],
        ["#f44336", "#f44336", "#f44336", "#f44336", "#f44336"],
        ["#f44336", "#f44336", "#f44336", "#f44336", "#f44336"],
    ]
    const [image, setImage] = useState(initialImage)
    const [flooding, setFlooding] = useState(false)

    const onCellClick = async (a, b) => {
        setFlooding(true)
        const finish = await floodFillAlgo(JSON.parse(JSON.stringify(image)), "white", image[a][b], [a, b], setImage)
        debugger
        if (finish) {
            setFlooding(false)
        }
    }
    return (
        <>
            <h1>
                Flood Fill algorithm
            </h1>
            <table>
                {image.map((row, a) => <tr>{row.map((cellColor, b) => <td style={{ backgroundColor: cellColor }} onClick={() => {
                    onCellClick(a, b)
                }}></td>)}</tr>)}
            </table>
            {flooding && <p>Flooding...</p>}
        </>
    )
}

export default FloodFill