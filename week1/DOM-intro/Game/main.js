

const goRight = function(){
    const ball = document.getElementById("ball")
    let newNumber = (parseInt(ball.style.left) || 0) + 15;
    console.log(newNumber);
    document.getElementById("ball").style.left = `${newNumber}px`;
  }

  const goLeft = function(){
    const ball = document.getElementById("ball")
    let newNumber = (parseInt(ball.style.left) || 0) - 15;
    console.log(newNumber);
    document.getElementById("ball").style.left = `${newNumber}px`;
  }

  const goUp = function(){
    const ball = document.getElementById("ball")
    let newNumber = (parseInt(ball.style.top) || 0) - 15;
    console.log(newNumber);
    document.getElementById("ball").style.top = `${newNumber}px`;
  }

  const goDown = function(){
    const ball = document.getElementById("ball")
    let newNumber = (parseInt(ball.style.top) || 0) + 15;
    console.log(newNumber);
    document.getElementById("ball").style.top = `${newNumber}px`;
  }


const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)


const subHeader = document.createElement("h2");
subHeader.innerHTML = "The best subHeader EVER!";
subHeader.setAttribute("class", "sub");
document.body.appendChild(subHeader);

