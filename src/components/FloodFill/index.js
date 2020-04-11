
import React, { useState, useEffect } from 'react'
import './FloodFill.css'
import { startFloodFill } from './algorithm'
import Container from '../Container/index'
import Menu from '../Menu/index'
import { ReactComponent as GithubLogo } from '../../images/github-logo.svg';

const FloodFill = () => {
    const [image, setImage] = useState([[]])
    const [flooding, setFlooding] = useState(false)
    const [fillType, setFillType] = useState("RANDOM")
    const [dimension, setDimension] = useState(20)
    const [connectedNeighbours, setConnectedNeighbours] = useState(4)

    const onDimensionChange = (size) => {
        let row = [], newImage = []
        for (let index = 0; index < size; index++) {
            row = []
            for (let index = 0; index < size; index++) {
                row[index] = fillType === "RANDOM" ? (Math.round(Math.random()) ? "#000" : "red") : "red"
            }
            newImage[index] = row
        }
        setImage(newImage)
    }

    useEffect(() => {
        onDimensionChange(dimension)
    }, [dimension, fillType])

    const onCellClick = async (a, b) => {
        if (flooding) return
        setFlooding(true)
        const finish = await startFloodFill(JSON.parse(JSON.stringify(image)), image[a][b] === "white" ? "#0cff0c" : "white", image[a][b], [a, b], setImage, Number(connectedNeighbours))
        if (finish) {
            setFlooding(false)
        }
    }
    return (
        <>
            <Container>
                <h1>
                    Flood Fill
                </h1>
                <p>Click on a tile to start.</p>
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
                    <label>Dimensions</label>
                    <select
                        value={dimension.toString()}
                        onChange={(e) => {
                            setDimension(Number(e.target.value))
                        }} >
                        <option value={"10"}>10</option>
                        <option value={"20"}>20</option>
                        <option value={"30"}>30</option>
                    </select>
                </div>
                <div>
                    <label>Connected Neibhours</label>
                    <select
                        value={connectedNeighbours.toString()}
                        onChange={(e) => {
                            setConnectedNeighbours(Number(e.target.value))
                        }} >
                        <option value={"4"}>4</option>
                        <option value={"8"}>8</option>
                    </select>
                </div>
                <div>
                    <label>Fill Type</label>
                    <select
                        value={fillType}
                        onChange={(e) => {
                            setFillType(e.target.value)
                        }} >
                        <option value={"RANDOM"}>RANDOM</option>
                        <option value={"PLAIN"}>PLAIN</option>
                    </select>
                </div>
                <div>
                    <a href="https://github.com/howareyouami/algorithm-visualizer" target="blank">
                        <GithubLogo width={20} height={20} />
                    </a>
                </div>
                <div>
                    <button onClick={() => {
                        onDimensionChange(dimension)
                    }}>
                        Refresh
                    </button>
                </div>
            </Menu>}
        </>
    )
}

export default FloodFill