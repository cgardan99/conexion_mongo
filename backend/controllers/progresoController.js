import Progreso from '../models/progresoModel.js'
import asyncHandler from 'express-async-handler'

export const getProgresos = asyncHandler(async(req, res) => {
    const progresos = await Progreso.find({})
    res.json(progresos);
});

export const getProgreso = asyncHandler(async(req, res) => {
    const progreso = await Progreso.findOne({
        _id: req.params.oid
    })
    res.json(progreso);
});

export const createProgreso = asyncHandler(async(req, res) => {
    var data = req.body;
    const created = await Progreso.create({
        diferencia_peso: data.diferencia_peso,
        diferencia_repeticiones: data.diferencia_repeticiones,
        diferencia_peso_corporal: data.diferencia_peso_corporal,
        diferencia_RM: data.diferencia_RM,
        oid_tiempo_progreso: data.oid_tiempo_progreso,
        oid: data.oid
    })
    res.json({
        creado: true,
        oid: created._id
    });
})

export const updateProgreso = asyncHandler(async(req, res) => {
    var data = req.body;
    const created = await Progreso.findOneAndUpdate({
        _id: req.params.oid
    },
    {
        diferencia_peso: data.diferencia_peso,
        diferencia_repeticiones: data.diferencia_repeticiones,
        diferencia_peso_corporal: data.diferencia_peso_corporal,
        diferencia_RM: data.diferencia_RM,
        oid_tiempo_progreso: data.oid_tiempo_progreso,
        oid: data.oid
    })
    res.json({
        editado: true,
        oid: req.params.oid
    });
})

export const deleteProgreso = asyncHandler(async(req, res) => {
    const eliminado = await Progreso.findByIdAndRemove(req.params.oid)
    res.json({eliminado: true});
})
