const getNeibhours = (coordinate) => {
    return ([
        [coordinate[0] - 1, coordinate[1]],
        [coordinate[0] - 1, coordinate[1] + 1],
        [coordinate[0], coordinate[1] + 1],
        [coordinate[0] + 1, coordinate[1] + 1],
        [coordinate[0] + 1, coordinate[1]],
        [coordinate[0] + 1, coordinate[1] - 1],
        [coordinate[0], coordinate[1] - 1],
        [coordinate[0] - 1, coordinate[1] - 1]
    ])
}
let visited = []

const delay = ms => new Promise(res => setTimeout(res, ms));

export const floodFillAlgo = async (image, newColor, oldColor, coordinate, setImage) => {
    if (visited.includes(JSON.stringify(coordinate))) return
    if (
        coordinate[0] < image.length &&
        coordinate[0] >= 0 &&
        coordinate[1] < image.length &&
        coordinate[1] >= 0 &&
        image[coordinate[0]][coordinate[1]] === oldColor
    ) {
        image[coordinate[0]][coordinate[1]] = newColor
        visited.push(JSON.stringify([coordinate[0], coordinate[1]]))
        setImage(JSON.parse(JSON.stringify(image)))
        await delay(50)
    } else return
    const neibhours = getNeibhours(coordinate)

    for (const neighCoord of neibhours) {
        await delay(50)
        floodFillAlgo(image, newColor, oldColor, neighCoord, setImage)
    }
    return true
}