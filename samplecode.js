
function convertFahrToCelsius(tmp){
    var temp = tmp;
    var message = false;

    if(isNaN(temp)==false){
        const cvtdval = (temp - 32)*(5 / 9);
        const rupcvtdval = cvtdval.toFixed(4);
        message = rupcvtdval+"\xB0F is "+temp+"\xB0C.";
    }else{
        message = temp+" is not a valid number but a/an "+typeof temp;
        if(Array.isArray(temp)){
            message = temp+" is not a valid number but a/an array";
        }
    }
   //return message;
   console.log(message);
}


function checkYuGiOh(n){
    var number = n;

    var output = Array();
    if(isNaN(number)==false){
for (i = 1; i <= number; i++){
    var collector = Array(); 
    var individual;

    if((i % 2) == false){   collector.push('Yu') }
    if((i % 3) == false){   collector.push('Gi') }
    if((i % 5) == false){   collector.push('Oh') }
    if(collector.length >= 1){
        individual = collector.join("-");
        output.push(individual);
    }else{
        output.push(i);
    }
}
console.log(output);
    }else{

        console.log("invalid parameter: "+number); 
    }


}
