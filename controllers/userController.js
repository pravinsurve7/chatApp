/* eslint-disable no-console */
const { validationResult } = require('express-validator/check');
const userService = require('../service/userservice');

const responseUtils = require('../utils/responseUtils');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
var createUserTable = (req, res) => {
    userService.createUserTable((err, data) => {
        responseUtils.send(err, data, req, res);
    });
};



var updateUser = (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
    }
    var userUpdateData = {
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name
    };
    userService.updateUser(userUpdateData, (err, data)=>{
        responseUtils.send(err,data,req,res);
    });
};
module.exports = {
    createUserTable , updateUser
};