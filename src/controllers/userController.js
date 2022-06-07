const UserModel= require("../models/userModel")

const createBook= async function (req, res) {
    let data= req.body;
    console.log(data);
    let savedData= await UserModel.create(data);
    console.log(savedData);
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allUsers= await UserModel.find()
    console.log(allUsers);
    res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.getBookData= getBooksData