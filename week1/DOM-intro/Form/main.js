
const form = document.getElementById("form");
const inputs = document.getElementsByClassName("box");


function clicked(){
  document.getElementById("error").innerHTML = ``
  for(bar of inputs){
    if(!bar.value){
      document.getElementById("error").innerHTML = `${bar.parentElement.className} is missing...` 
      return;
    }
    switch(bar.parentElement.className){
      case "name":
        checkName();
        break;
      case "salary":
        checkSal();
        break;
      case "phone":
        checkPhone();
        break;
    }
  }
}


function checkName(){
  let name = document.getElementById("n").value;
  console.log(name.length)
  if(name.length < 2){
    document.getElementById("error").innerHTML += "name is too short.\n";
  }
}


function checkSal(){
  let sal = document.getElementById("s").value;
  if(sal <= 10000 || sal >= 16000){
    document.getElementById("error").innerHTML += `we cat accept your salary. \n`
  }
}


function checkPhone(){
  let phone = document.getElementById("p").value;
  if(!phone || phone.length < 10){
    document.getElementById("error").innerHTML += `phone number is too short. \n`
  }
}


