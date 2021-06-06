import TiempoProgreso from '../models/tiempoProgresoModel.js'
import asyncHandler from 'express-async-handler'

export const getTiempoProgresos = asyncHandler(async(req, res) => {
    const tiempoProgresos = await TiempoProgreso.find({})
    res.json(tiempoProgresos);
});

export const getTiempoProgreso = asyncHandler(async(req, res) => {
    const tiempoProgreso = await TiempoProgreso.findOne({
        _id: req.params.oid
    })
    res.json(tiempoProgreso);
});

export const createTiempoProgreso = asyncHandler(async(req, res) => {
    var data = req.body;
    const created = await TiempoProgreso.create({
        general: data.general,
        semanal: data.semanal,
        mensual: data.mensual,
        anual: data.anual
    })
    res.json({
        creado: true,
        oid: created._id
    });
})

export const updateTiempoProgreso = asyncHandler(async(req, res) => {
    var data = req.body;
    const created = await TiempoProgreso.findOneAndUpdate({
        _id: req.params.oid
    },
    {
        diferencia_peso: data.diferencia_peso,
        diferencia_repeticiones: data.diferencia_repeticiones,
        diferencia_peso_corporal: data.diferencia_peso_corporal,
        diferencia_RM: data.diferencia_RM,
        oid_tiempo_tiempoProgreso: data.oid_tiempo_tiempoProgreso,
        oid: data.oid
    })
    res.json({
        editado: true,
        oid: req.params.oid
    });
})

export const deleteTiempoProgreso = asyncHandler(async(req, res) => {
    const eliminado = await TiempoProgreso.findByIdAndRemove(req.params.oid)
    res.json({eliminado: true});
})
