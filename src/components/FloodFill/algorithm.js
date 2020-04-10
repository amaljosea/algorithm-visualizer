let visitedArray = [], neibhoursValidArray = []
const delay = ms => new Promise(res => setTimeout(res, ms));


const getValidNeibhours = (currentCoordinate, image, oldColor) => {
    const allNeibhours = [
        [currentCoordinate[0] - 1, currentCoordinate[1]],
        [currentCoordinate[0], currentCoordinate[1] + 1],
        [currentCoordinate[0] + 1, currentCoordinate[1]],
        [currentCoordinate[0], currentCoordinate[1] - 1],
    ]
    const validNeighbours = allNeibhours.filter((neibourCoordinate) => {
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

const floodFillAlgo = async (image, newColor, oldColor, coordinate, setImage) => {
    image[coordinate[0]][coordinate[1]] = newColor
    visitedArray.push(JSON.stringify([coordinate[0], coordinate[1]]))
    setImage(JSON.parse(JSON.stringify(image)))
    await delay(100)
    const newNeibhours = getValidNeibhours(coordinate, image, oldColor)
    await Promise.all(newNeibhours.map(async (neighCoord, index) => {
        await delay(100)
        return floodFillAlgo(image, newColor, oldColor, neighCoord, setImage)
    }))
    return true
}
export const startFloodFill = (image, newColor, oldColor, coordinate, setImage) => {
    visitedArray = []
    neibhoursValidArray = []
    return floodFillAlgo(image, newColor, oldColor, coordinate, setImage)
}