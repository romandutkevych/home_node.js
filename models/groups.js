var db = require("../db");
var ObjectID = require('mongodb').ObjectID;

exports.all = function (cb) {
    db.get().collection("groups").find().toArray(function (err, docs) {
        cb(err, docs);
    })
}

exports.findById = function (id, cb) {
    db.get().collection('groups').findOne({ _id: ObjectID(id)}, function(err, docs){
        cb(err, docs)
    })
}

exports.create = function (group, cb) {
    db.get().collection('groups').insert(group, function (err, result){
      cb(err, result);
    })
}

exports.change = function (id, newData, cb) {
    db.get().collection('groups').updateOne({_id: ObjectID(id)},newData, function(err, docs){
        cb(err, docs);
    })
}

exports.delete = function (id, cb) {
    db.get().collection('groups').deleteOne({_id:ObjectID(id)}, function (err, docs) {
        cb(err, docs);
    })
}