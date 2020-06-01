const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const user = await connection("user").select("*");

    return res.json(user);
  },
  async create(req, res) {
    const { name, email, password } = req.body;
    const mensagem = {
      msg: "Cadastro efetuado",
    };

    await connection("user").insert({
      name,
      email,
      password,
    });
    return res.json(mensagem);
  },
  async update(req, res) {
    const { name, email } = req.body;
    const { id } = req.params;

    await connection("user")
      .where("id", "=", id)
      .update("name", name, "and", "email", email);

    return res.status(204).send();
  },
};
