var Groups = require('../models/groups');

exports.all = function (req, res) {
    Groups.all(function(err, docs){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs)
    })
}

exports.findById = function(req, res){
    Groups.findById(req.params.id, function (err, docs) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
}

exports.create = function(req, res){
    var group = {
        name: req.body.name,
        description: req.body.description,
        budgetMin: req.body.budgetMin,
        budgetMax: req.body.budgetMax,
        dateDeparture: req.body.dateDeparture,
        dateArrival: req.body.dateArrival,
        minPersons: req.body.minPersons,
        maxPersons: req.body.maxPersons
    };
    Groups.create(group, function(err, docs){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(group);
    })
}

exports.change = function (req, res) {
    Groups.change(req.params.id, {name: req.body.name,
        description: req.body.description,
        budgetMin: req.body.budgetMin,
        budgetMax: req.body.budgetMax,
        dateDeparture: req.body.dateDeparture,
        dateArrival: req.body.dateArrival,
        minPersons: req.body.minPersons,
        maxPersons: req.body.maxPersons},
        function(err, result){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }
            res.sendStatus(200);
        })
}

exports.delete = function (req, res) {
    Groups.delete(req.params.id, function (err, result) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}