import ClienteV1 from '../models/clienteModelV1.js'
import ClienteV2 from '../models/clienteModelV2.js'
import asyncHandler from 'express-async-handler'

export const getClients = asyncHandler(async(req, res) => {
    const clients = await ClienteV1.find({})
    const full_clients = [];
    for(let client in clients) {
        var client2 = await ClienteV2.findOne({
            oid: clients[client]._id
        });
        full_clients.push({
            _id: clients[client]._id,
            nombre: clients[client].nombre,
            apellidos: clients[client].apellidos,
            edad: clients[client].edad,
            isAdmin: clients[client].isAdmin,
            email: clients[client].email,
            peso: client2.peso,
            sexo: client2.sexo
        });
    }
    res.json(full_clients);
});

export const getClient = asyncHandler(async(req, res) => {
    const client = await ClienteV1.findOne({
        _id: req.params.oid
    })
    var client2 = await ClienteV2.findOne({
        oid: client._id
    });

    res.json({
        _id: client._id,
        nombre: client.nombre,
        apellidos: client.apellidos,
        edad: client.edad,
        email: client.email,
        isAdmin: client.isAdmin,
        peso: client2.peso,
        sexo: client2.sexo
    });
});
    
export const createClient = asyncHandler(async(req, res) => {
    var data = req.body;
    const created = await ClienteV1.create({
        nombre: data.nombre,
        apellidos: data.apellidos,
        edad: data.edad,
        isAdmin: data.isAdmin,
        email: data.email
    })
    const created2 = await ClienteV2.create({
        oid: created._id,
        peso: data.peso,
        sexo: data.sexo
    })
    res.json({
        creado: true,
        oid: created._id
    });
})

export const updateClient = asyncHandler(async(req, res) => {
    var data = req.body;
    const created = await ClienteV1.findOneAndUpdate({
        _id: req.params.oid
    },
    {
        nombre: data.nombre,
        apellidos: data.apellidos,
        edad: data.edad,
        isAdmin: data.isAdmin,
        email: data.email
    })
    const created2 = await ClienteV2.findOneAndUpdate({
        oid: req.params.oid
    },{
        oid: created._id,
        peso: data.peso,
        sexo: data.sexo
    })
    res.json({
        editado: true,
        oid: req.params.oid
    });
})

export const deleteClient = asyncHandler(async(req, res) => {
    var data = req.body;
    const created = await ClienteV1.findByIdAndRemove(req.params.oid)
    const created2 = await ClienteV2.findOneAndRemove({
        oid: req.params.oid
    })
    res.json({eliminado: true});
})
