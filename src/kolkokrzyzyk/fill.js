
var player = "X";

function fill(event){
var target = event.target;

var content = target.textContent;

if(player == "X" && content == ""){
target.textContent= "X";
player = "O"
}else if(player == "O" && content == ""){
target.textContent= "O";
player = "X"
}

document.getElementById("player").textContent = player;
}

function check(previousPlayer){

var f1 = document.getElementById("0").textContent;
var f2 = document.getElementById("1").textContent;
var f3 = document.getElementById("2").textContent;

var fields1 = [f1,f2,f3];

f1 = document.getElementById("3").textContent;
f2 = document.getElementById("4").textContent;
f3 = document.getElementById("5").textContent;

var fields2 = [f1,f2,f3];

f1 = document.getElementById("6").textContent;
f2 = document.getElementById("7").textContent;
f3 = document.getElementById("8").textContent;

var fields3 = [f1,f2,f3];


var arrays = [fields1,fields2,fields3];

var i;
var counterX = 0;
var counterO = 0;
    for(i=0; i<arrays.length; i++){
        var j;
        counterO = 0;
        counterX = 0;
        for(j=0;j<arrays.length;j++){
            if(arrays[i][j] == "X"){
                counterX++;
            }else if(arrays[i][j] == "O"){
                counterO++;
            }
        }

        if(counterX == 3){
          var won = document.getElementById("won").textContent = "Player X WON!";
        return true;
        }else if(counterO == 3){
          var won = document.getElementById("won").textContent = "Player O WON!";
        return true;
        }
    }


    for(i=0; i<arrays.length; i++){
        var j;
        counterO = 0;
        counterX = 0;
        for(j=0;j<arrays.length;j++){
            if(arrays[j][i] == "X"){
                counterX++;
            }else if(arrays[j][i] == "O"){
                counterO++;
            }
        }

        if(counterX == 3){
          var won = document.getElementById("won").textContent = "Player X WON!";
        return true;
        }else if(counterO == 3){
          var won = document.getElementById("won").textContent = "Player O WON!";
        return true;
        }
    }



        counterO = 0;
        counterX = 0;
    for(i=0; i<arrays.length; i++){
            if(arrays[i][i] == "X"){
                counterX++;
            }else if(arrays[i][i] == "O"){
                counterO++;
            }

        if(counterX == 3){
          var won = document.getElementById("won").textContent = "Player X WON!";
        return true;
        }else if(counterO == 3){
          var won = document.getElementById("won").textContent = "Player O WON!";
            return true;
        }

    }

        counterO = 0;
        counterX = 0;
    for(i=0; i<arrays.length; i++){
            if(arrays[i][arrays.length - i -1] == "X"){
                counterX++;
            }else if(arrays[i][arrays.length - i -1] == "O"){
                counterO++;
            }

        if(counterX == 3){
          var won = document.getElementById("won").textContent = "Player X WON!";
          return true;
        }else if(counterO == 3){
          var won = document.getElementById("won").textContent = "Player O WON!";
          return true;
        }
    }

    return false;

}


var wasWin = false;
function play(event){
if(!wasWin){
fill(event)
wasWin = check(player);
}
}

function reset(){
document.getElementById("0").textContent = "";
document.getElementById("1").textContent = "";
document.getElementById("2").textContent = "";

document.getElementById("3").textContent = "";
document.getElementById("4").textContent = "";
document.getElementById("5").textContent = "";

document.getElementById("6").textContent = "";
document.getElementById("7").textContent = "";
document.getElementById("8").textContent = "";

document.getElementById("won").textContent = "";
document.getElementById("player").textContent = "X";

wasWin = false;
player = "X";
}
