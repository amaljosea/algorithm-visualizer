let step = 1

const getNeibhours = ()=>{
    
}
export const floodFillAlgo = (image, selectedColor, selectedCoordinates) => {
    selectedCoordinates.forEach(coordinate => {
        image[coordinate[0]][coordinate[1]] = selectedColor //current 
        image[coordinate[0] - 1][coordinate[1]] = selectedColor //top 
        image[coordinate[0] - 1][coordinate[1] + 1] = selectedColor //top right 
        image[coordinate[0]][coordinate[1] + 1] = selectedColor //right 
        image[coordinate[0] + 1][coordinate[1] + 1] = selectedColor //right bottom 
        image[coordinate[0] + 1][coordinate[1]] = selectedColor //bottom 
        image[coordinate[0] + 1][coordinate[1] - 1] = selectedColor //bottom left 
        image[coordinate[0]][coordinate[1] - 1] = selectedColor //left 
        image[coordinate[0] - 1][coordinate[1] - 1] = selectedColor //left 
    });
    return image
}