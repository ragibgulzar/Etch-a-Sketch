
let container = document.getElementById("container");
let input = document.getElementById("myRange");
let colorInput = document.getElementById("colorInput");
let eraser = document.getElementById("eraser");
let clear =  document.getElementById("clear");
let black = document.getElementById("black");

function createDivs() {
  let numDivs = parseInt(input.value); 
  let selectedColor = colorInput.value;
  container.innerHTML = ""; 

  let divSize = 100 / numDivs;



  for (let i = 0; i < numDivs**2; i++) {
    let div = document.createElement("div");
    div.style.width = divSize + "%";
    div.style.height = divSize + "%";
    div.style.float = "left";
    div.style.boxSizing = "border-box";
    div.style.border = "1px solid black";


    
    div.addEventListener("mouseover", function changeBg()
    {
      
            div.style.backgroundColor = selectedColor;
            div.style.border = "1px solid white";         
               
    });

    
    eraser.addEventListener("click", function erase()
    {

        div.addEventListener("mouseover", function changeBg()
        {
            div.style.backgroundColor = "white";
            div.style.border = "1px solid black";
        });

    });


    clear.addEventListener("click", function clear()
    {

        div.style.backgroundColor = "white";
        div.style.border = "1px solid black";

    });


    black.addEventListener("click", function black()
    {
    
        div.addEventListener("mouseover", function changeBg()
        {        
            
            div.style.backgroundColor = "black";
            div.style.border = "1px solid white";      
    
        });
    
    
    });
   
    container.appendChild(div);
  }
}


input.addEventListener("change", createDivs);
colorInput.addEventListener("change", createDivs);


createDivs();















