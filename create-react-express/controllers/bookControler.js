const db = require("../models");

module.exports = {
    addBook: function(req, res){
      db.book
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}