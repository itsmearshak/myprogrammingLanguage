const prompt = require('prompt-sync')();
  
var code = "LOAD AX;LOAD CX;ADD CX;PUT AX;LOAD CX;ADD CX;ADD CX;PUT AX;PUT CX";

var cc=`
var reg = {
    AX: 0,
    CX: 0,

};`;
var isSuccess =true;
var lines = code.split(';');
for (let line of lines) {
    var token1 = line.split(' ')[0];
    var token2 = line.split(' ')[1];
    switch (token1) {
        case 'LOAD':
           cc+=`reg['${token2}']=parseInt(prompt('Enter the value'));`;
            
            break;
        case 'ADD' :
          cc += ` reg['AX']+=reg['${token2}'];`;
          
            break;
        case 'PUT':
        cc+= `console.log(reg['${token2}']);`
           
            break;
        default:
            console.log("error");
            isSuccess=false;

    }
}
console.log(cc);
eval(cc);
