const doulas = require("../models/doulasModels.js");
const jwt = require("jsonwebtoken");
const SECRET = `${process.env.TOKEN_SECRET}`;

const getDoulas = (req, res) => {
  doulas.find((err, doulas) => {
    if (err) {
      res.status(500).send({ message: err.message });
    } else {
      res.status(200).json(doulas);
    }
  });
};

const getByEstado = async (req, res) => {
  try {
    const { estado } = req.query;
    const findEstado = await doulas.find({ estado: estado });
    res.status(200).json(findEstado);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getByCidade = async (req, res) => {
  try {
    const { cidade: cidade } = req.query;
    const findCidade = await doulas.find({ cidade: cidade });
    res.status(200).json(findCidade);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getIdDoula = (req, res) => {
  const id = req.params.id;

  doulas.findById(id, (err, doulas) => {
    if (err) {
      res.status(404).send({ message: `${err.message} - Id Doula not found` });
    } else {
      res.status(200).send(doulas);
    }
  });
};

const createDoula = async (req, res) => {
  try {
    const authHeader = req.get("authorization");
    if (!authHeader) {
      return res.status(401).json("You need an authorization");
    }
    const token = authHeader.split(" ")[1];
    await jwt.verify(token, SECRET, async function (erro) {
      if (erro) {
        return res.status(403).send("Access denied");
      }
      const allDoulas = await doulas.find();
      res.status(200).json(allDoulas);
    });
    const { nome, cidade, estado, contato, email } = req.body;

    const newDoula = new doulas({
      nome,
      cidade,
      estado,
      contato,
      email,
    });
    const savedDoula = await newDoula.save();
    res.status(201).json(savedDoula);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updateDoula = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("You need authorization");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (err) {
      if (err) {
        return res.status(403).send("Denied access");
      }
    });
    const { nome, cidade, estado, contato, email } = req.body;

    await doulas.findByIdAndUpdate(req.params.id, {
      nome,
      cidade,
      estado,
      contato,
      email,
    });
    const doulaUpdated = await doulas.findById(req.params.id);
    res.status(200).json(doulaUpdated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteDoulas = async (req, res) => {
  try {
    const authHeader = req.get("authorization");

    if (!authHeader) {
      return res.status(401).send("You need authorization");
    }

    const token = authHeader.split(" ")[1];

    await jwt.verify(token, SECRET, async function (err) {
      if (err) {
        return res.status(403).send("Denied access");
      }
    });
    const { id } = req.params;
    const findByIdAndDelete = await doulas.findByIdAndDelete(id);

    if (findByIdAndDelete == null) {
      return res.status(404).json({ message: `ID doulas ${id} not found ` });
    }

    await findByIdAndDelete.remove();

    res.status(200).json({ message: "Doula deleted" });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  getDoulas,
  getByEstado,
  getByCidade,
  getIdDoula,
  createDoula,
  updateDoula,
  deleteDoulas,
};
