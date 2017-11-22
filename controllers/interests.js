var Interests = require('../models/interests');

exports.all = function (req, res) {
    Interests.all(function(err, docs){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs)
    })
}

exports.findById = function(req, res){
    Interests.findById(req.params.id, function (err, docs) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}

exports.create = function (req, res) {
    var interest = {
        title: req.body.title ,
        description: req.body.description
    };
    Interests.create(interest,function( err, result){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(interest);
    })
}

exports.change = function (req, res) {
    Interests.change(req.params.id,
        {title: req.body.title,
         description: req.body.description
        },
        function( err, result){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
            res.sendStatus(200);
    })
}

exports.delete = function (req, res) {
    Interests.delete(req.params.id,
        function( err, result){
            if(err){
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        })
}