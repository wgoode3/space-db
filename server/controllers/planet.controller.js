const Planet = require("../models/planet.model");

class PlanetController {
    getAll(req, res) {
        Planet.find()
            .then(planets => res.json(planets))
            .catch(errors => res.json(errors));
    }
    create(req, res) {
        const newPlanet = new Planet(req.body);
        // default for rings is false
        if(!newPlanet.hasRings) {
            newPlanet.hasRings = false;
        }
        console.log(3, newPlanet);
        newPlanet.save()
            .then(()=> {
                console.log(4, newPlanet);
                res.json(newPlanet)
            })
            .catch(errors => res.json(errors));
    }
    addMoon(req, res) {
        Planet.findByIdAndUpdate({_id: req.params._id}, {$push: {moons: req.body}})
            .then(() => res.json({msg: "ok"}))
            .catch(errors => res.json(errors));
    }
}

module.exports = new PlanetController();