/*
*Author: Jason Dewese
*Created: 1/24/2021
*Title: Mouse Painter
*
*/
const MAX_GRID_SIZE = 100;
const gridArea = document.querySelector("#gridArea");
const newGrid = document.querySelector("#pickSize");


//Initialize with a 16x16 grid
drawGrid(16);


//user defined grid size
newGrid.addEventListener("click", function(){
    let gridSize = window.prompt("Enter the amount of sqaures you want on each side of the grid: ");
    
    //limit size user can enter between 1 and 100
    if (gridSize <= MAX_GRID_SIZE && gridSize > 0)
    {
        drawGrid(gridSize);
    }
    else{
        alert("Error. Please enter a number between 1 and 100 for size.");
    }
    
});

//Creates a size x size square of divs
//Adds divs to #gridArea in DOM
//size {integer} - dimension of grid to display
function drawGrid(size)
{
    //delete old grid, then create/draw new one
    deleteGrid();

    //create newly sized grid
    gridArea.style.cssText = 
        "grid-template-columns: repeat(" + size + ", " + 1/size + "fr);"
       +"grid-template-rows: repeat(" + size + ", " + 1/size + "fr);"

    //create div elements and append
    for (let i = 0; i < size*size; i++)
    {
        const div = document.createElement('div');
        div.id = "grid" + i;
        div.style.backgroundColor = 'white';
        div.style.color = "black";
        div.style.borderStyle = "solid";
        div.style.borderColor = 'black';
        div.style.borderWidth = '1px';
        
        gridArea.appendChild(div);
    }
}

//removes all child nodes from #gridArea
function deleteGrid()
{
    while (gridArea.firstChild)
    {
        gridArea.removeChild(gridArea.firstChild);
    }
}