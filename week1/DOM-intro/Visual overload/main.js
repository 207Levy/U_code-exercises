
const container = document.getElementById("container");

for (let i=0; i < 6; i++){
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  box.setAttribute("id", `${i+1}`);
  box.style.backgroundColor = "blue";
  box.innerHTML = `Box number ${i+1} `;
  box.onmouseenter = function(){ changeRandomColor(this) } ;
  container.appendChild(box);
}


function changeRandomColor(box){
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  box.style.backgroundColor = '#' + randomColor;
  console.log(box, randomColor);
}

