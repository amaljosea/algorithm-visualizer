let visitedArray = []
let neibhoursValidArray = []
const delay = ms => new Promise(res => setTimeout(res, ms));


const getValidNeibhours = (currentCoordinate, image, oldColor) => {
    const allNeibhours = [
        [currentCoordinate[0] - 1, currentCoordinate[1]],
        [currentCoordinate[0] - 1, currentCoordinate[1] + 1],
        [currentCoordinate[0], currentCoordinate[1] + 1],
        [currentCoordinate[0] + 1, currentCoordinate[1] + 1],
        [currentCoordinate[0] + 1, currentCoordinate[1]],
        [currentCoordinate[0] + 1, currentCoordinate[1] - 1],
        [currentCoordinate[0], currentCoordinate[1] - 1],
        [currentCoordinate[0] - 1, currentCoordinate[1] - 1]
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
            debugger
            neibhoursValidArray.push(JSON.stringify(neibourCoordinate))
            return true
        }
    })
    return validNeighbours
}

export const floodFillAlgo = async (image, newColor, oldColor, coordinate, setImage) => {

    image[coordinate[0]][coordinate[1]] = newColor
    visitedArray.push(JSON.stringify([coordinate[0], coordinate[1]]))
    setImage(JSON.parse(JSON.stringify(image)))
    await delay(50)

    const newNeibhours = getValidNeibhours(coordinate, image, oldColor)
    for (const neighCoord of newNeibhours) {
        await delay(50)
        floodFillAlgo(image, newColor, oldColor, neighCoord, setImage)
    }
    console.log("neibhoursValidArray.length", neibhoursValidArray, "visitedArray.length", visitedArray)
    if ((neibhoursValidArray.length + 1) === visitedArray.length) return true
}