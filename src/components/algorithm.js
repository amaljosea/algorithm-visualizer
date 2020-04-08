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

export const floodFillAlgo = (image, newColor, oldColor, coordinate) => {
    if (visited.includes(JSON.stringify(coordinate))) {
        return image
    }
    if (
        coordinate[0] < image.length &&
        coordinate[0] >= 0 &&
        coordinate[1] < image.length &&
        coordinate[1] >= 0 &&
        image[coordinate[0]][coordinate[1]] === oldColor
    ) {
        image[coordinate[0]][coordinate[1]] = newColor
        visited.push(JSON.stringify([coordinate[0], coordinate[1]]))
    } else {
        return image
    }
    const neibhours = getNeibhours(coordinate)
    neibhours.forEach((neighCoord) => {
        floodFillAlgo(image, newColor, oldColor, neighCoord)
    })
    return image
}