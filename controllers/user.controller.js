const User = require('../sequalize').user;

exports.list = function(req, res, next){
    User.findAll()
    .then(users => res.json(users))
    .catch(next);
}

exports.findById = function(req, res){
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}

exports.create = function(req, res){
    User.create(req.body)
    .then(user => res.json(user))
    .catch(next);
}

exports.update = function(req, res){
    User.findById(req.params.id)
      .then(user => {
        return user.update(req.body)
        .then(user =>{
            res.json(user);
        });
      })
      .catch(next);
}

exports.delete = function(req, res){
    User.destroy({  
        where: { id: req.params.id }
      })
      .then(affectedRows  => {
        res.json(affectedRows );
      })
      .catch(next);
}