const d = new Date();

const printDate = function() {
   console.log("currentDate: " + d);
}
const printMonth = function(){
 const month = d.getMonth();
 console.log("currentMonth: " + month);
}
const getBatchInfo = function(){
  console.log('Radon, W3D3, the topic for today is Nodejs module system');
}

module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.getBatchInfo = getBatchInfo;