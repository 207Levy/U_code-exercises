const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }

function checkReservation(){
    const input = document.getElementById("txtBox").value;
    const msg = document.createElement("p");
    console.log(input);
    msg.style.color = "#c0392b";
    msg.style.fontFamily = "Helvetica";
    if(reservations[input])
    {
        if(reservations[input].claimed){
            msg.innerHTML = "Hmm, someone already claimed this.";
        }
        else{
            msg.innerHTML = `Welcome, ${input}`;
            reservations[input].claimed = true;
        }
    }
    else{
        msg.innerHTML = "you have no reservation..."
    }

    document.body.appendChild(msg)

}