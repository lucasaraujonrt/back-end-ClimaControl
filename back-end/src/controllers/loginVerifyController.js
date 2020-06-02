const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const user = await connection("user").where({ email: req.body.email });
    const verify = JSON.stringify(user);
    if (verify == "[]") throw "Email Invalido";
    else {
      if (user[0].password === req.body.password) console.log("Login efetuado");
      else {
        throw "Senha Invalido";
      }
    }
    return res.status(200).send();
  },
};
