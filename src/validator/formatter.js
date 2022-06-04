
const afterTrim = function(){
let str = '   functionUp   '.trim();

console.log(str);
}




const changetoLowerCase = function(){
    let str1 = 'FUNCTIONUP';
    console.log(str1.toLowerCase());
}
const changeToUpperCase = function(){
    let str2= 'functionUp'
    console.log(str2.toUpperCase());
}

module.exports.afterTrim = afterTrim;
module.exports.afterLowercase = changetoLowerCase;
module.exports.afterUpperCase = changeToUpperCase;