function createBoard(size){

var body = document.body;
console.log("Creating new board");
    if(document.getElementById("table")){
    document.getElementById("table").remove();
    }

    var table = document.createElement("table");
    table.setAttribute("id", "table");

    var x = Math.floor(Math.random() * 5);
    var y = Math.floor(Math.random() * 5);

   for(i = 0; i<size; i++){
        var tr = table.insertRow();

        for(var j = 0; j < size; j++){
            var td = tr.insertCell();

            if(x==i && y==j){
                td.setAttribute("id", "mole");
                td.setAttribute("onclick","createBoard(5); start()");
            }
        }
   }

   body.appendChild(table);
}

var pts = 0;

function addPoints(){
pts++;
var pt = document.getElementById("points");

pt.textContent = "Points: " + pts;

console.log(2000/(Math.sqrt(pts)));
return 2000/(Math.sqrt(pts));
}

var tmr;
function start(){
clearInterval(tmr);
tmr = setInterval("createBoard(5)", addPoints());
}