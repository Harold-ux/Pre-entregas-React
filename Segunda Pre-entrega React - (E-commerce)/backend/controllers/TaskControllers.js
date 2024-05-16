const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
};

module.exports.saveTask = (req, res) => {
  const { task } = req.body;

  TaskModel.create({ task })
    .then((data) => {
      console.log("Salvado exitosamente...");
      res.status(201).send(data);
    })
    .catch((error) => {
      console.log(error);
      res.send({ error: error, msg: "Algo salió mal!!" });
    });
};

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body;

  TaskModel.findByIdAndUpdate(id, { task })
    .then(() => res.send("Actualizado exitosamente"))
    .catch((error) => {
      console.log(error);
      res.send({ error: error, msg: "Algo salió mal!!" });
    });
};

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Borrado exitosamente"))
    .catch((error) => {
      console.log(error);
      res.send({ error: error, msg: "Algo salió mal!!" });
    });
};
