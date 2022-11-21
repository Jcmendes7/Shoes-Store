const ShoesModel = require("../models/shoes");
function index(req, res) {
  const shoesList = ShoesModel.getAll();
  res.render("index", { shoesList });
}

module.exports = {
  index,
};
