const Planets = require("../controllers/planet.controller");

function middleWareFunction(req, res, next) {
    console.log(2, req.body);
    next();
}

module.exports = app => {
    app.get("/api/planets", Planets.getAll);
    app.post("/api/planets", middleWareFunction, Planets.create);
    app.put("/api/planets/:_id/add_moon", Planets.addMoon);
}