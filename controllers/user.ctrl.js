const express = require("express");
const dal = require("./../DAL");
const typedefs = require('./../typedefs');

const userCtrl = express.Router();

userCtrl.post('/', function (req,res) {
    /**@type {typedefs.userObject} */
    const user = {
        email: req.body['email'],
        first: req.body['first'],
        last: req.body['last'],
        password: req.body['password'],
        playerIds:req.body['playerId']
    }
})