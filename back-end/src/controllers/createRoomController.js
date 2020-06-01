const connection = require("../database/connection");

module.exports = {
  async index(req, res) {},
  async create(req, res) {
    const { ideal_temperature, name, equipment } = req.body;

    await connection("room").insert({
      ideal_temperature,
      name,
      equipment,
    });
    return res.json(req.body);
  },
};
