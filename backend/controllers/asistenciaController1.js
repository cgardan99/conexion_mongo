import AsistenciaH1 from '../models/asistenciaModelH1.js'
import asyncHandler from 'express-async-handler'

export const getAsistencias = asyncHandler(async(req, res) => {
    const asistencias = await AsistenciaH1.find({})
    res.json(asistencias);
});

export const getAsistencia = asyncHandler(async(req, res) => {
    const asistencia = await AsistenciaH1.findOne({
        _id: req.params.oid
    })
    res.json(asistencia);
});

export const getAsistenciasCliente = asyncHandler(async(req, res) => {
    const asistencias = await AsistenciaH1.find({
        oid: req.params.oid
    })
    res.json(asistencias);
});

export const createAsistencia = asyncHandler(async(req, res) => {
    var data = req.body;
    const created = await AsistenciaH1.create({
        asistencia: data.costo,
        fecha: data.fecha_inscripcion,
        horario: data.horario,
        oid: data.oid,
    })
    res.json({
        creado: true,
        oid: created._id
    });
})

export const updateAsistencia = asyncHandler(async(req, res) => {
    var data = req.body;
    const created = await AsistenciaH1.findOneAndUpdate({
        _id: req.params.oid
    },
    {
        asistencia: data.costo,
        fecha: data.fecha_inscripcion,
        horario: data.horario,
        oid: data.oid,
    })
    res.json({
        editado: true,
        oid: req.params.oid
    });
})

export const deleteAsistencia = asyncHandler(async(req, res) => {
    const eliminado = await AsistenciaH1.findByIdAndRemove(req.params.oid)
    res.json({eliminado: true});
})
