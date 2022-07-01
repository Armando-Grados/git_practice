const getSleepHours = day => {
    day = day.toLowerCase();
    switch(day){
        case "lunes":
            return 8;
        case "martes":
            return 7;
        case "miercoles":
            return 6;
        case "jueves":
            return 5;
        case "viernes":
            return 4;
        case "sabado":
            return 3;
        case "domingo":
            return 2;
    }
}

console.log(getSleepHours(""));

const getActualSleepHours = () => {
    return getSleepHours("lunes") +
    getSleepHours("martes") +
    getSleepHours("miercoles") +
    getSleepHours("jueves") +
    getSleepHours("viernes") +
    getSleepHours("sabado") +
    getSleepHours("domingo") ;
}

console.log(getActualSleepHours())

const getIdealSleepHours = idealHours =>{
    return idealHours*8;
}

console.log(getIdealSleepHours(10))

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealHours = getIdealSleepHours(10);
    if(actualSleepHours === idealHours){
        console.log("Estas soñando bien, boludoo")
    }else if(actualSleepHours < idealHours){
        console.log(`Te hace falta dormir weon, exactamente ${idealHours-actualSleepHours}`)
    }else if(actualSleepHours > idealHours){
        console.log(`Duermes demasiado mongolico, exactamente ${actualSleepHours-idealHours}`)
    }else {
        console.log("Algun dato fue mal introducido")
    }
}

calculateSleepDebt();












