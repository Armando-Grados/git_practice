const getUserChoice = userInput => {
    userInput= userInput.toLowerCase();
    if(userInput == "rock" || userInput == "paper" || userInput == "siccors"){
        return userInput
    }else{
        console.log("Ingresa una de las opciones oe animal")
    }
}


const getComputerChoice = () =>{
    randomNumber = Math.floor(Math.random()*3);
    switch(randomNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "siccors";
    }
}



const determineWinner = (getUserChoice,getComputerChoice) => {
    if(getUserChoice == getComputerChoice){
        return "Empate basuras"
    }

    if(getUserChoice == "rock"){
        if(getComputerChoice == "paper"){
            return "La computadora gano , ella saco papel , y tu piedra"
        }else{
            return "Tu ganaste , la computadora saco tijeras , y tu piedra"
        }
    }

    if(getUserChoice == "paper"){
        if(getComputerChoice == "rock"){
            return "Tu ganaste , la computadora saco rock , y tu papel"
        }else{
            return "La computadora gano , ella saco tijeras , y tu papel"
        }
    }

    if(getUserChoice == "siccors"){
        if(getComputerChoice == "paper"){
            return "Tu ganaste , La computadora saco papel, y tu tijeras"
        }else{
            return "La computadora gano , ella saco piedra , y tu tijeras"
        }
    }

}


let userChoice = getUserChoice("paper");
let computerChoice = getComputerChoice();

console.log(userChoice)
console.log(computerChoice);

console.log(determineWinner(userChoice,computerChoice));






