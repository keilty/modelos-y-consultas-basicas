const db = require('../database/models');

module.exports = {
    list : (req,res) => {
        db.Actor.findAll()
        .then(actors => {
            // res.send(actors)
            return res.render('actorsList', 
                {actors})

        }) .catch(error => console.log(error))
    },
    detail : (req,res) => {
        db.Actor.findByPk(req.params.id)
        .then(actors => {
            // res.send(genres)
            return res.render('actorsDetail',
                {actors}
            )
        })
        .catch(error => console.log(error))
    }
}