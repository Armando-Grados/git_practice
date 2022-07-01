const finalGrade = (a,b,c) =>{
    const average=(a+b+c)/3;
    console.log(average);
    if( a<0 || a>100 || b<0 || b>100 || c<0 || c>100){
        return "You have entered an invalid grade"
    }else if (average<60) {
        return "F";
    }else if (average<70){
        return "D";
    }else if(average<80){
        return "C";
    }else if(average<90){
        return "B";
    }else if(average<101){
        return "A";
    }else{
        return "Algo anda mal";
    }
}
console.log(finalGrade(100,90,30));