/*
*Author: Jason Dewese
*Created: 1/24/2021
*Title: Mouse Painter
*
*/

const gridArea = document.querySelector("#gridArea");


//just testing drawGrid and deleteGrid functions
drawGrid(5);
drawGrid(10);

//Creates a size x size square of divs
//Adds divs to #gridArea in DOM
//size {integer} - dimension of grid to display
function drawGrid(size)
{
    //delete old grid, then create/draw new one
    deleteGrid();

    for (let i = 0; i < size; i++)
    {
        const div = document.createElement('div');
        div.id = "grid" + i;
        div.style.backgroundColor = 'white';
        div.style.color = "black";
        div.style.borderStyle = "solid";
        div.style.borderColor = 'black';
        div.style.borderWidth = '1px';
        div.textContent = 'grid' + i;
        
        
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