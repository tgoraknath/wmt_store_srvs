var ts = require('../config/config').config();
var appRouter = function (app) {
  app.get("/search/", function(req, res) {
  	var query = req.query.q;
    res.status(200).send(ts.get(query));
  });
}
module.exports = appRouter;