const express = require("express");
const externalModule = require("../logger/logger");
const dateInfo = require("../util/helper.js");
const validatorEx = require("../validator/formatter.js");
const lodash = require('lodash');

const router = express.Router();

router.get("/test-me", function (req, res) {
  externalModule.welcome();
  dateInfo.printDate();
  dateInfo.printMonth();
  dateInfo.getBatchInfo();
  validatorEx.afterTrim();
  validatorEx.afterLowercase();
  validatorEx.afterUpperCase();
  res.send("My first ever api!");
});

router.get("/hello", function(req,res){
  //chunk function
  let monthsOfYear = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November','December'];
  let subarrays = lodash.chunk(monthsOfYear,3);
  console.log( subarrays);

  //tail function
  let oddNumber = [1,3,5,7,9,11,13,15,17,19];
   let last9Elements = lodash.tail(oddNumber);
   console.log("Last 9 elements are: " + last9Elements);

   //union function
   let arr1 = [ 1, 2, 3, 4, 5 ];
   let arr2 = [ 4, 3, 8,6 ];
   let arr3 = [ 8, 39, 67, 6];
   let arr4 = [ 39, 87, 34, 90 ];
   let arr5 = [ 87, 45, 36];
   console.log("merged and unique values are: " + lodash.union(arr1,arr2,arr3,arr4,arr5));

   //fromPairs function
   let movies = [ ["horror","The Shining"],["drama","Titanic" ], ["thriller", "Shutter Island"],["fantasy","Pans Labyrinth"]];
     console.log(lodash.fromPairs(movies));
   res.send("My second  api!");

})

module.exports = router;
// adding this comment for no reason
