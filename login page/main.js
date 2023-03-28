const emailInput = document.getElementById("emailInput");

const passwordInput = document.getElementById("passwordInput");

const submitBtn = document.getElementById("submitBtn");

const firstNameInput = document.getElementById("firstName");

const lastNameInput = document.getElementById("lastName")

const firstNameTeller = document.getElementById("first-name-teller");

const lastNameTeller = document.getElementById("last-name-teller");
let passwordTeller = document.getElementById("password-teller");

submitBtn.addEventListener("click",(clicked)=>{
    // reviewEmail(emailInput.value);
    clicked.preventDefault()
    checkNames(firstNameInput.value,lastNameInput.value);
    checkPassword(passwordInput.value);
})

function checkNames (firstName,lastName){
    if(firstName.length < 3){
        firstNameTeller.classList.remove("green");
        firstNameTeller.classList.add("red");
        
        firstNameTeller.textContent = "your name must'nt  contain less than  2 letters"
    }else{
        firstNameTeller.classList.add("green");
        firstNameTeller.classList.remove("red");

        firstNameTeller.textContent = "your first name respect our rules";
    }
    if(lastName.length < 3){
        lastNameTeller.classList.remove("green");
        lastNameTeller.classList.add("red");
        
        lastNameTeller.textContent = "your name must'nt  contain less than  2 letters"
    }else{
        lastNameTeller.classList.add("green");
        lastNameTeller.classList.remove("red");
        lastNameTeller.textContent = "your last name respect our rules";
    }

}

function checkPassword(password){
    for(let i = 0; i <password.length;i++){
        if(password.match(/\d/g)){
            console.log(password.match(/\d/g))
            passwordTeller.textContent = "your password respect our rules";
            passwordTeller.classList.add("green");
            passwordTeller.classList.remove("red")
        }else{
            passwordTeller.textContent = "your password does not have a number";
            passwordTeller.classList.remove("green");
            passwordTeller.classList.add("red")
        }
    }
}

