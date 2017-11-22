var db = require("../db");
var ObjectID = require('mongodb').ObjectID;

exports.all = function (cb) {
    db.get().collection("interests").find().toArray(function (err, docs) {
        cb(err, docs);
    })
}

exports.findById = function (id, cb) {
    db.get().collection('interests').findOne({ _id: ObjectID(id)}, function(err, docs){
        cb(err, docs)
    })
}

exports.create = function (interest, cb) {
    db.get().collection('interests').insert(interest, function (err, result){
        cb(err, result);
    })
}

exports.change = function (id, newData, cb) {
    db.get().collection('interests').updateOne({_id: ObjectID(id)},newData, function(err, docs){
        cb(err, docs);
    })
}

exports.delete = function (id, cb) {
    db.get().collection('interests').deleteOne({_id: ObjectID(id)},function(err, docs){
        cb(err, docs);
    })
}