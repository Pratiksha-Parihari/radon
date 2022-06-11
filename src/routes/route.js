const express = require("express");
// const myHelper = require("../util/helper");
// const underscore = require("underscore");

const router = express.Router();

router.get("/candidates", function (req, res) {
  console.log(
    "Query paramters for this request are " + JSON.stringify(req.query)
  );
  let gender = req.query.gender;
  let state = req.query.state;
  let district = req.query.district;
  console.log("State is " + state);
  console.log("Gender is " + gender);
  console.log("District is " + district);
  let candidates = ["Akash", "Suman"];
  res.send(candidates);
});

router.get("/candidates/:canidatesName", function (req, res) {
  console.log("The request objects is " + JSON.stringify(req.params));
  console.log("Candidates name is " + req.params.canidatesName);
  res.send("Done");
});
router.get("/movies", function(req,res){
  
  let movie = [ 'The Conjuring', 'The Excorcist', 'The Nun', 'Annabelle', 'A Nightmare on Elm Street','The Return of Michael Myers']
  res.send(movie);
})

router.get("/movies/:indexNumber", function(req,res){
  
  let movie = [ 'The Conjuring', 'The Excorcist', 'The Nun', 'Annabelle', 'A Nightmare on Elm Street','The Return of Michael Myers']
   console.log("the req object is: "  + JSON.stringify(req.params));
    let i= req.params.indexNumber;
    validMaxValue= movie.length;
    let movieCorrespondingToIndex = '';
    if(i<validMaxValue){
     movieCorrespondingToIndex = movie[i]
    }else {
      movieCorrespondingToIndex= "Please provide proper index for getting movies name"
    }
  })
  router.get("/films", function(req,res){
  
      let film = [ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]
       
       res.send(film);
    })

    router.get("/films/:filmId", function(req,res){
  
      let film = [ {
        id: 1,
        name: 'The Shining'
       }, {
        id: 2,
        name: 'Incendies'
       }, {
        id: 3,
        name: 'Rang de Basanti'
       }, {
        id: 4,
        name: 'Finding Nemo'
       }]
        console.log("The request objects is " + JSON.stringify(req.params));
        let result='';
        let fid= req.params.filmId
        let filmLength = film.length 
        if(fid>0 && fid<=filmLength){
          for(let i=0; i<film.length;i++){
            if(fid== film[i].id){
             result=  JSON.stringify(film[i])
             console.log(result);
            }
          }
        }
         else{
          result= "No movie exists with this id"
          console.log(result);
         }

       res.send(result);
    })
 


module.exports = router;
