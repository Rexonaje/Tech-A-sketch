
//making grid
//set container
let containerDiv = document.getElementById("MainPad");
containerDiv.style.display = "flex";
containerDiv.style.flexDirection = "column";
containerDiv.style.alignItems = "center";


function SetGridAmount(N, size) {
  //get color
  color="red";
  let showColor=document.getElementById("showColor");
let colorBlue=document.getElementById("blue").addEventListener('click',function(){
    color="blue";
    showColor.style.backgroundColor=color;
  });
let colorRed=document.getElementById("red").addEventListener('click',function(){
    color="Red";
    showColor.style.backgroundColor=color;
  });
let colorYell=document.getElementById("yellow").addEventListener('click',function(){
    color="yellow";
    showColor.style.backgroundColor=color;
  });
  let colorGreen=document.getElementById("green").addEventListener('click',function(){
    color="green";
    showColor.style.backgroundColor=color;
  });

  //a for cicle to the grid that puts N divs in a row, and repeat N times
  for (e = 0; e <= N; e++) {
    //row container
    let row = document.createElement("div");

    row.className = "row";
    row.style.width = "auto";
    row.style.height = size + "px"; //same as div.style.height
    row.style.padding = "0px";
    row.style.margin = "0px";

    for (i = 0; i <= N; i++) {
      //creates the Divs
      let div = document.createElement("div");

      div.className = "squareDiv";
      div.id=i+e;
      div.style.width = size + "px";
      div.style.height = size + "px";
      div.style.backgroundColor = "#cccccc";
      div.style.border = "1px solid #aaaaaa";
      div.style.display = "inline-block";
      div.style.margin = "0%";


      
      div.addEventListener("mouseover",function(){
        div.style.backgroundColor=color;
        

      })
    

      row.appendChild(div);
    }
    containerDiv.appendChild(row);
  }
}
SetGridAmount(10, 20);

let numberButton = document.getElementById('numberButton');

numberButton.addEventListener("click", function () {
	//input inside funcion  so the function can read the value when click
let numberInput = document.getElementById('numberInput').value;console.log(numberInput);
  //delete last grid
	let MainPad=document.getElementById("MainPad");
	while(MainPad.lastElementChild){
		MainPad.removeChild(MainPad.lastElementChild);
	}
 if(numberInput>=59){numberInput=59;}
  SetGridAmount(numberInput,20);
  console.log(numberInput);
});





//la suma de todos los sizes debe dar siempre 600  o menos no importa la cantidad de divs
// hacer tamaño de la grid ajustable, tamaño de cada div ajustable tambien
// a mayor cantidad de cuadrados menor cantidad de tamaño en cada uno
