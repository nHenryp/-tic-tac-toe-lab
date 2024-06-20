//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, 

//3.5) a function should  be called to render this game state.


//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.



/*-------------------------------- Constants --------------------------------*/

let board 
 
let turn 

let winner

let tie 
 
//let playerX 

//let playerO 

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]]
    // and so on
  
 


/*---------------------------- Variables (state) ----------------------------*/


/*------------------------ Cached Element References ------------------------*/



const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')


/*-------------------------------- Functions --------------------------------*/




function init() {
    board = ['', '', '', '', '', '', '', ''];
    turn = 'X';
    winner = false;
    tie = false;
    render();

};


function updateBoard( ) {
    board.forEach((sqr, index) => {
        squareEls[index].innerHTML = `${board[index]}`
    });
        
  
}



       
        
function updateMessage() {
    if (winner === false || tie === false ) {
        messageEl.innerHTML = 'Next Player';
    } else if (winner === false || tie === true ){
        messageEl.innerHTML = 'it/s a tie';
    }  else  {
        messageEl.innerHTML = 'Congrats you win';
    }
    
} 

function render() {
    updateBoard()
    updateMessage()

}


function handleClick(event) {
    const squareIndex = event.target.id 
    if(board[squareIndex] !== ''){
        console.log('hi')
    }
    

}
handleClick()
   

//const updateBoard = () => {
 //   squareEls.forEach(square, [''])
        
//    }
//updateBoard()





 


/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square) => {
    square.addEventListener('click', handleClick)


})




