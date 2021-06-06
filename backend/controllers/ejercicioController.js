import Ejercicio from '../models/ejercicioModel.js'
import asyncHandler from 'express-async-handler'

export const getEjercicios = asyncHandler(async(req, res) => {
    const ejercicios = await Ejercicio.find({})
    res.json(ejercicios);
});

export const getEjercicio = asyncHandler(async(req, res) => {
    const ejercicio = await Ejercicio.findOne({
        _id: req.params.oid
    })
    res.json(ejercicio);
});

export const createEjercicio = asyncHandler(async(req, res) => {
    var data = req.body;
    const created = await Ejercicio.create({
        nombre_ejercicio: data.nombre_ejercicio,
        peso_estandar_sexo: data.peso_estandar_sexo,
        repeticiones: data.repeticiones,
        RM: data.RM,
        peso_capaz: data.peso_capaz,
        oid: data.oid
    })
    res.json({
        creado: true,
        oid: created._id
    });
})

export const updateEjercicio = asyncHandler(async(req, res) => {
    var data = req.body;
    const created = await Ejercicio.findOneAndUpdate({
        _id: req.params.oid
    },
    {
        nombre_ejercicio: data.nombre_ejercicio,
        peso_estandar_sexo: data.peso_estandar_sexo,
        repeticiones: data.repeticiones,
        RM: data.RM,
        peso_capaz: data.peso_capaz,
        oid: data.oid
    })
    res.json({
        editado: true,
        oid: req.params.oid
    });
})

export const deleteEjercicio = asyncHandler(async(req, res) => {
    const eliminado = await Ejercicio.findByIdAndRemove(req.params.oid)
    res.json({eliminado: true});
})
