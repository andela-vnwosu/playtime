const express = require('express');
const router = express.Router();

router.route('/')
    .get(function(req, res){
        return res.status(200).send({message: "App up and running"})
    });

module.exports = router