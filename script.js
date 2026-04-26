let gridItems = document.getElementsByClassName("box")

let currentTurn = "X"

let gameIsFinished = false

let boardArray = [
    "0","1","2",
    "3","4","5",
    "6","7","8",
]



for (let item of gridItems){
    item.addEventListener("click" , function (){

        if (gameIsFinished){
            return
        }

        let value = item.getAttribute("value")
        let index = value - 1
        if (boardArray[index] == "X" || boardArray[index] == "O"){
            return
        }
        
        // Filling the value visually
        let squareContent = document.querySelector(`.box[value="${value}"]`)
        squareContent.innerHTML = `<span class="${currentTurn}">${currentTurn}</span>`

         // Filling the value logically
         

         boardArray[index] = currentTurn

        evaluateBoard ()

        if(!gameIsFinished){

    if(currentTurn == "X"){
        currentTurn = "O"
    }else{
        currentTurn = "X"
    }

    document.getElementsByTagName("h3")[0].innerHTML = `Turn : ${currentTurn}`
}
      

    })

    function evaluateBoard (){

        if(
            // Rows
            (boardArray[0] == boardArray[1] && boardArray[1] == boardArray[2] ) ||
            (boardArray[3] == boardArray[4] && boardArray[4] == boardArray[5] ) ||
            (boardArray[6] == boardArray[7] && boardArray[7] == boardArray[8] ) ||

            // Columns
            (boardArray[0] == boardArray[3] && boardArray[3] == boardArray[6] ) ||
            (boardArray[1] == boardArray[4] && boardArray[4] == boardArray[7] ) ||
            (boardArray[2] == boardArray[5] && boardArray[5] == boardArray[8] ) ||

            // Diagonal
            (boardArray[0] == boardArray[4] && boardArray[4] == boardArray[8] ) ||
            (boardArray[2] == boardArray[4] && boardArray[4] == boardArray[6] )

            
        ){
            gameIsFinished = true
            let winner = currentTurn
            document.getElementsByTagName("h3")[0].innerHTML = `\u{1F389} The Winner is : ${winner} \u{1F3C6}`
        }

        var isDraw = true

        for (let square of boardArray){
            if(square != "X" && square != "O" ){
                isDraw = false
            }
        }

        if(isDraw){
            gameIsFinished = true
            document.getElementsByTagName("h3")[0].innerHTML = `Draw \u{1F91D}`
        }
    }
}

document.getElementById("reset-btn").addEventListener("click", function (){
    reset()
})

function reset () {

    // resetting the visual part

    for (item of gridItems){
        
        let value = item.getAttribute("value")
        let squareContent = document.querySelector(`.box[value="${value}"]`)
        squareContent.innerHTML = ""

        boardArray = [
        "0","1","2",
        "3","4","5",
        "6","7","8",
        ]
    }

    gameIsFinished = false
    currentTurn = "X"
    document.getElementById("status").innerHTML = `Turn : ${currentTurn}`

}
