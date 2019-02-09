const User = require('../sequalize').user;

exports.list = function(req, res){
    User.findAll()
    .then(users => res.json(users))
}

exports.findById = function(req, res){
    User.findById(req.params.id)
    .then(user => res.json(user));
}

exports.create = function(req, res){
    User.create(req.body)
    .then(user => res.json(user));        
}

exports.update = function(req, res){
    User.findById(req.params.id)
      .then(user => {
        user.update(req.body)
        .then(user =>{
            res.json(user);
        });
      }); 
}

exports.delete = function(req, res){
    User.destroy({  
        where: { id: req.params.id }
      })
      .then(affectedRows  => {
        res.json(affectedRows );
      });
}