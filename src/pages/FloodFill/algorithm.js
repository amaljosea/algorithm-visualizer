let visitedArray = [], neibhoursValidArray = []
const delay = ms => new Promise(res => setTimeout(res, ms));

const getAllNeibours = (currentCoordinate, connectedNeighbours) => {
    const fourNeibhours = [
        [currentCoordinate[0] - 1, currentCoordinate[1]],
        [currentCoordinate[0], currentCoordinate[1] + 1],
        [currentCoordinate[0] + 1, currentCoordinate[1]],
        [currentCoordinate[0], currentCoordinate[1] - 1],
    ]
    const diagonalNeibhours = [
        [currentCoordinate[0] - 1, currentCoordinate[1] + 1],
        [currentCoordinate[0] + 1, currentCoordinate[1] + 1],
        [currentCoordinate[0] + 1, currentCoordinate[1] - 1],
        [currentCoordinate[0] - 1, currentCoordinate[1] - 1]
    ]
    const eightNeibours = [...fourNeibhours, ...diagonalNeibhours]
    return (connectedNeighbours === 4 ? fourNeibhours : eightNeibours)
}

const getValidNeibhours = (currentCoordinate, image, oldColor, connectedNeighbours) => {
    const validNeighbours = getAllNeibours(currentCoordinate, connectedNeighbours).filter((neibourCoordinate) => {
        if (
            neibourCoordinate[0] < image.length &&
            neibourCoordinate[0] >= 0 &&
            neibourCoordinate[1] < image.length &&
            neibourCoordinate[1] >= 0 &&
            image[neibourCoordinate[0]][neibourCoordinate[1]] === oldColor &&
            !visitedArray.includes(JSON.stringify(neibourCoordinate)) &&
            !neibhoursValidArray.includes(JSON.stringify(neibourCoordinate))
        ) {
            neibhoursValidArray.push(JSON.stringify(neibourCoordinate))
            return true
        }
    })
    return validNeighbours
}

const floodFill = async (image, newColor, oldColor, coordinate, setImage, connectedNeighbours) => {
    image[coordinate[0]][coordinate[1]] = newColor
    visitedArray.push(JSON.stringify([coordinate[0], coordinate[1]]))
    setImage(JSON.parse(JSON.stringify(image)))
    await delay(10)
    const newNeibhours = getValidNeibhours(coordinate, image, oldColor, connectedNeighbours)
    for (const neighCoord of newNeibhours) {
        await delay(10)
        await floodFill(image, newColor, oldColor, neighCoord, setImage, connectedNeighbours)
    }
    return true
}

export const startFloodFill = (image, newColor, oldColor, coordinate, setImage, connectedNeighbours) => {
    visitedArray = []
    neibhoursValidArray = []
    return floodFill(image, newColor, oldColor, coordinate, setImage, connectedNeighbours)
}