const Adm = require("../models/admModels");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = `${process.env.TOKEN_SECRET}`;


const createNewAdm = (req, res) => {
  const passwordWithHash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = passwordWithHash;
  const adm = new Adm(req.body);
  adm.save(function (err) {
    if (err) {
      res.status(500).send({ message: err.message });
    }
    res.status(201).send(adm);
  });
};

const allAdm = (req, res) => {
  Adm.find(function (err, adm) {
    if (err) {
      res.status(500).json({ message: error.message });
    }
    res.status(200).send(adm);
  });
};

const login = (req, res) => {
  Adm.findOne({ email: req.body.email }, function (error, adm) {
    if (error) {
      return res.status(500).send({ message: "Header not found" });
    }
    if (!adm) {
      return res
        .status(404)
        .send(`There is no adm registered with this email: ${email}`);
    }
    const validPassword = bcrypt.compareSync(req.body.password, adm.password);
    if (!validPassword) {
      return res.status(403).send("Incorrect password. Try again later.");
    }
    const token = jwt.sign({ email: req.body.email }, SECRET);
    return res.status(200).send(token);
  });
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    await Adm.findByIdAndDelete(id);
    const message = `Adm with ID ${id} was successfully deleted`;
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNewAdm,
  allAdm,
  login,
  deleteById,
};
