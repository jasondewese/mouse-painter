/*
*Author: Jason Dewese
*Created: 1/24/2021
*Title: Mouse Painter
*
*/
const MAX_GRID_SIZE = 100;
const INITIAL_SIZE = 16;
const gridArea = document.querySelector("#gridArea");
const newGrid = document.querySelector("#pickSize");
const blackBtn = document.querySelector("#blackBtn");
const randomColor = document.querySelector("#randomColor");
const pickColor = document.querySelector("#pickColor");
const eraser = document.querySelector("#eraser");
const rainbow = document.querySelector("#rainbow");

//Initialize with a 16x16 grid
drawGrid(INITIAL_SIZE);


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

//add white paint effect when 'eraser' clicked
eraser.addEventListener("click", function(){
    const tempDivs = document.querySelectorAll(".temp");
    paint(tempDivs, "white");
    
});

//allow user to pick a color to draw with
pickColor.addEventListener("click", function(){
    let colorChoice = window.prompt("What color would you like to draw with?" );
    
    const tempDivs = document.querySelectorAll(".temp");
    paint(tempDivs, colorChoice);
    
});

//draw when randomly generated rgb value
randomColor.addEventListener("click", function(){
    let r = getRandomInt(0,255);
    let g = getRandomInt(0,255);
    let b = getRandomInt(0,255);
    
    const tempDivs = document.querySelectorAll(".temp");
    paint(tempDivs, "rgb("+r+","+g+","+b+")");
    
});

//each div in gridArea gets a different random color
rainbow.addEventListener("click", function(){
    
    const tempDivs = document.querySelectorAll(".temp");
    rainbowPaint(tempDivs);
    
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
        div.setAttribute('class', 'temp');
        gridArea.appendChild(div);
    }
    
    const tempDivs = document.querySelectorAll(".temp");
    paint(tempDivs, "black");
    
}




//Allows the mouse to draw in the grid
//nodeList {nodeList} - nodeList of all divs in gridArea
//color {string} - the color you wish the mouse to draw in
function paint(nodeList, color)
{
    for (let i = 0; i < nodeList.length; i++)
    {    
        //give each div a mouseover draw effect
        nodeList[i].addEventListener('mouseover', function(){
            this.style.backgroundColor = color;
        });
        
    }
}

//Allows the mouse to draw in the grid with each square as 
//a different random color
//nodeList {nodeList} - nodelist of all divs in gridArea
function rainbowPaint(nodeList)
{
    for (let i = 0; i < nodeList.length; i++)
    {    
        let r = getRandomInt(0,255);
        let g = getRandomInt(0,255);
        let b = getRandomInt(0,255);
    
        nodeList[i].addEventListener('mouseover', function(){
            this.style.backgroundColor = "rgb("+r+","+g+","+b+")";
        });
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


//return {integer} - random value between min and max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }