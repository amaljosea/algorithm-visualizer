
import React, { useState, useEffect } from 'react'
import './FloodFill.css'
import { floodFillAlgo } from './algorithm'
import Container from '../Container/index'
import Menu from '../Menu/index'


const FloodFill = () => {
    const [image, setImage] = useState([[]])
    const [flooding, setFlooding] = useState(false)

    const changeDimensions = (size) => {
        const row = [], newImage = []
        for (let index = 0; index < size; index++) {
            row[index] = "#000"
        }
        for (let index = 0; index < size; index++) {
            newImage[index] = row
        }
        setImage(newImage)
    }

    useEffect(() => {
        changeDimensions(10)
    }, [])

    const onCellClick = async (a, b) => {
        if (flooding) return
        setFlooding(true)
        const finish = await floodFillAlgo(JSON.parse(JSON.stringify(image)), "white", image[a][b], [a, b], setImage)
        if (finish) {
            setFlooding(false)
        }
    }
    return (
        <>
            <Container>
                <h1>
                    Flood Fill algorithm
                </h1>
                <div>
                    <table>
                        {image.map((row, a) => <tr>{row.map((cellColor, b) => <td style={{ backgroundColor: cellColor }}
                            onClick={() => {
                                onCellClick(a, b)
                            }}></td>)}</tr>)}
                    </table>
                </div>
                {flooding && <p>Flooding...</p>}
            </Container>
            {!flooding && <Menu>
                <div>
                    <p>Dimensions {image.length} * {image.length}</p>
                </div>
                <div>
                    <select
                        selected={10}
                        onChange={(e) => {
                            changeDimensions(Number(e.target.value))
                        }} >
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={40}>40</option>
                    </select>
                </div>
            </Menu>}
        </>
    )
}

export default FloodFill