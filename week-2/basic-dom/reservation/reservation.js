const btnClaim = document.getElementById("btn-input-claim");
const inputClaim = document.getElementById("text-input-claim");
const log = document.getElementById("log");

const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }

const cleanLog = function(){
    log.innerHTML = "";
}

btnClaim.onclick = function(){
    if(inputClaim.value != ""){
        if(reservations[inputClaim.value] == undefined){
            log.innerHTML = `there is nothing under their name`;
            setTimeout(cleanLog, 2000);
        }else if(reservations[inputClaim.value].claimed == true){
            log.innerHTML = `WELCOME ${inputClaim.value}`;
            setTimeout(cleanLog, 2000);
        }else{
            log.innerHTML = `reservation already claimed`;
            setTimeout(cleanLog, 2000);
        }
    }
}
