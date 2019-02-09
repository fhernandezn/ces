exports.list = function(req, res){
    res.send('List of users');
}

exports.findById = function(req, res){
    res.send('User by Id');
}

exports.create = function(req, res){
    res.send('User create');
}

exports.update = function(req, res){
    res.send('User update');
}

exports.delete = function(req, res){
    res.send('User Delete');
}