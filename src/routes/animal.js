const express = require("express");
const router = express.Router(); //manejador de rutas de express
const animalSchema = require("../models/animalModel");

//Nuevo animal
router.post("/animalitos", (req, res) => {
    // Asegurarse de usar los campos que el modelo espera (nombre, edad, tipo)
    const animal = new animalSchema({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipo: req.body.tipo,
        fecha: req.body.fecha,
    });
    animal
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

//Consultar todos los animales
router.get("/animals", (req, res) => {
    animalSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
});
//Consultar un animal por su id
router.get("/animals/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.status(404).json({ message: error }));
});
//Modificar el nombre de un animal por su id
router.put("/animals/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, tipo, fecha } = req.body;
    animalSchema
        .updateOne({ _id: id }, {
            $set: { nombre, edad, tipo, fecha }
        })
        .then((data) => res.json(data))
        .catch((error) => res.status(500).json({ message: error }));
});

router.delete("/animals/:id", (req, res) => {
    const { id } = req.params;
    animalSchema
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.status(500).json({ message: error });
        });
});

module.exports = router;
