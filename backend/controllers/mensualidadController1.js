import MensualidadH1 from '../models/mensualidadModelH1.js'
import asyncHandler from 'express-async-handler'

export const getMensualidades = asyncHandler(async(req, res) => {
    const mensualidades = await MensualidadH1.find({})
    res.json(mensualidades);
});

export const getMensualidad = asyncHandler(async(req, res) => {
    const mensualidad = await MensualidadH1.findOne({
        _id: req.params.oid
    })
    res.json(mensualidad);
});

export const getMensualidadesCliente = asyncHandler(async(req, res) => {
    const mensualidades = await MensualidadH1.find({
        oid: req.params.oid
    })
    res.json(mensualidades);
});

export const createMensualidad = asyncHandler(async(req, res) => {
    var data = req.body;
    const created = await MensualidadH1.create({
        costo: data.costo,
        fecha_inscripcion: data.fecha_inscripcion,
        horario: data.horario,
        pagado: data.pagado,
        oid: data.oid,
    })
    res.json({
        creado: true,
        oid: created._id
    });
})

export const updateMensualidad = asyncHandler(async(req, res) => {
    var data = req.body;
    const created = await MensualidadH1.findOneAndUpdate({
        _id: req.params.oid
    },
    {
        costo: data.costo,
        fecha_inscripcion: data.fecha_inscripcion,
        horario: data.horario,
        pagado: data.pagado,
        oid: data.oid,
    })
    res.json({
        editado: true,
        oid: req.params.oid
    });
})

export const deleteMensualidad = asyncHandler(async(req, res) => {
    const eliminado = await MensualidadH1.findByIdAndRemove(req.params.oid)
    res.json({eliminado: true});
})
