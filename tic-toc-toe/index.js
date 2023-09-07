let boxes = document.querySelectorAll('.box');
let info  = document.querySelector('.info');
let newBtn = document.querySelector(".new");

let currPlayer;
const winning = [[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let Gamegrid; 
let winningCombination=[];

function initalGame()
{
    currPlayer ='X';
    Gamegrid = ["", "", "", "", "", "", "", "", ""]; 
    info.innerHTML = `Current Player is - ${currPlayer}`;
    newBtn.classList.remove('active'); 
    boxes.forEach((box, index) =>
    {
        boxes[index].innerText = '';
        boxes[index].classList.remove('winner'); 
    }) 
    document.querySelector('.grid').style.pointerEvents = 'auto'; 
    winningCombination=[]
}

initalGame();

function swapTurn()
{
    if(currPlayer === 'X')
    {
        currPlayer = 'O';
    }
    else
    {
        currPlayer = 'X';
    }  
    info.innerHTML = `Current Player is - ${currPlayer}`;
} 

function handleclick(index)
{
    if(Gamegrid[index] === "")
    {
        boxes[index].innerText = currPlayer; 
        Gamegrid[index] = currPlayer; 
        
        swapTurn(); 
        checkGame();
    }
}

boxes.forEach((box, index) => { 
    box.addEventListener('click', () => { 
        handleclick(index);
    })
}); 

function checkGame()
{ 
    let draw = true;
   
    winning.forEach((val) =>
    {  
        if(Gamegrid[val[0]] !== "" && Gamegrid[val[0]] === Gamegrid[val[1]] && Gamegrid[val[1]] === Gamegrid[val[2]]) 
        {      boxes[val[0]].classList.add('winner');  
        boxes[val[1]].classList.add('winner');  
        boxes[val[2]].classList.add('winner'); 
           
            if(Gamegrid[val[0]]==='X')
            info.innerHTML = `Winner is X`; 
          else
          info.innerHTML = 'Winner is O' 
        
            draw = false; 
            document.querySelector('.grid').style.pointerEvents = 'none'; 
           
        } 
          
    });

    if (draw && Gamegrid.forEach(cell => cell !== "")) {
        info.innerHTML = "It's a draw!";
    }
} 

newBtn.addEventListener('click', initalGame);
