nameInput = document.getElementById("name-input");
desiredSalaryInput = document.getElementById("desiredSalary-input");
birthdayInput = document.getElementById("birthday-input");
phoneInput = document.getElementById("phone-input");
log = document.getElementById("log");
container = document.getElementById("container");
welcome = document.getElementById("welcome");

const cleanLog =function(){
    log.innerHTML = ""
}

const validate = function(){
    if(nameInput.value == ""){
        log.innerHTML = "name required"
    }else if(desiredSalaryInput.value == ""){
        log.innerHTML = "salary required"
    }else if(phoneInput.value == ""){
        log.innerHTML = "phone required"
    }else if(birthdayInput.value.length == 0){
        log.innerHTML = "birthday required"
    }else if(nameInput.value.length < 2){
        log.innerHTML = "Name must be longer than 2 characters"
    }else if(desiredSalaryInput.value < 10000 || desiredSalaryInput >16000){
        log.innerHTML = "Salary must be greater than 10,000 but less than 16,000"
    }else if(phoneInput.value.length != 10){
        log.innerHTML = "Phone must be 10 digits long"
    }else{
        container.style.display = "none"
        welcome.innerHTML = `welcome ${nameInput.value}`
    }
    

    setTimeout(cleanLog, 1000);
}