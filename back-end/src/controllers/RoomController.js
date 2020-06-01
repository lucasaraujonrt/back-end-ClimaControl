const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const rooms = await connection("room").select("*");

    return res.json(rooms);
  },
  async create(req, res) {
    const { ideal_temperature, temperature, name, equipment } = req.body;

    await connection("room").insert({
      ideal_temperature,
      temperature,
      name,
      equipment,
    });
    return res.json(req.body);
  },
  async delete(req, res) {
    const { id } = req.params;
    await connection("room").where("id", id).delete();

    return res.status(204).send();
  },
  async update(req, res) {
    const { temperature } = req.body;
    const { id } = req.params;
    await connection("room")
      .where("id", "=", id)
      .update("temperature", temperature);

    return res.status(204).send();
  },
};
