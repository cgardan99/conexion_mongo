import mongoose from 'mongoose';

const clienteSchemaV1 = mongoose.Schema({
    nombre: {
        type: String,
        required: "Falta tu nombre"
    },
    apellidos:{
        type: String,
        required: "Faltan tus apellidos"
    },
    edad: {
        type: mongoose.Schema.Types.Number,
        required: "Falta tu edad",
    }
})

const ClienteV1 = mongoose.client_v_1.model('ClientV1', clienteSchemaV1)

export default ClienteV1