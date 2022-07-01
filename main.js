// CONVERTIDOR TEMPERATURA  ---------------------------------------------

const kelvin = 0;
const celsius = kelvin-273;

// let newton = Math.floor(celsius*(33/100));

// let fahrenheit = Math.floor(celsius*(9/5)+32);

// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
// console.log(`The temperature is ${newton} degrees newton`);


//  MIS AÑOS EN PERRO  ------------------------------------------------------------------

let myAge = 35;
let myDogYears;

// EN Condicional simple

// if(myAge>2){
//     myDogYears= 2*10.5 + (myAge-2)*4;
//     // console.log(`Tus años perro son ${2*10.5 + (myAge-2)*4}`)
// }else{
//     myDogYears= myAge*10.5;
//     // console.log(`Tus años perro son ${myAge*10.5}, Felicidades niño`);
// }

//console.log(`Mis años en perro son ${myDogYears}`);

//  En funcion simple

// function misAñosPerro(myAge){
//     if(myAge>2){
//         myDogYears= 2*10.5 + (myAge-2)*4;
//         return `Mis años en perro son ${myDogYears}`;
//     }else{
//         myDogYears=myAge*10.5;
//         return `Mis años en perro son ${myDogYears}`;
//     }
// } 

// console.log(misAñosPerro(myAge));


// Funcion Ternaria

// const miAñitoPerruno = (myAge) => myAge>2 ? (2*10.5 + (myAge-2)*4) : (myAge*10.5);

// console.log(`Mi añito perruno es ${miAñitoPerruno(myAge)}`);


// MAGIC EIGHT BALL , LAS 8 BOLAS MAGICAS  -----------------------------------------------------------------

let userName="";
let userQuestion="";
let randomNumber= Math.floor(Math.random()*8);
let eightBall="";

userName ? console.log(`Hola ${userName}`) : console.log(`Ingresa un nombre oe tarao`);
userQuestion ? console.log(`${userQuestion}`) : console.log(`Ingresa una pregunta oe tarao`);

if(randomNumber === 0){
    console.log(`It is certain`);
}else if(randomNumber === 1){
    console.log(`It is decidely so`);
}else if(randomNumber === 2){
    console.log(`Reply hazy try again`);
}else if(randomNumber === 3){
    console.log(`Cannot predict now`);
}else if(randomNumber === 4){
    console.log(`Do not count on it`);
}else if(randomNumber === 5){
    console.log(`My sources say no`);
}else if(randomNumber === 6){
    console.log(`Outlook not so good`);
}else{
    console.log(`Signs point yes`);
}

console.log(randomNumber);

switch(randomNumber){
    case 0:
        console.log(`It is certain`);
        break;
    case 1:
        console.log(`It is decidely so`);
        break;
    case 2:
        console.log(`Reply hazy try again`);
        break;
    case 3:
        console.log(`Cannot predict now`);
        break;
    case 4:
        console.log(`Do not count on it`);
        break;
    case 5:
        console.log(`My sources say no`);
        break;
    case 6:
        console.log(`Outlook not so good`);
        break;
    default:
        console.log(`Signs point yes`);
}

//////