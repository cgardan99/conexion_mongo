import mongoose from 'mongoose';

const clienteSchemaV2 = mongoose.Schema({
    oid: {
        type: mongoose.Schema.Types.ObjectId,
        required: "No se ha creado.",
        unique: true
    },
    peso: {
        type: mongoose.Schema.Types.Number,
        required: "Falta el peso del usuario"
    },
    sexo: {
        type: String,
    }
})

const ClienteV2 = mongoose.client_v_2.model('ClientV2', clienteSchemaV2)

export default ClienteV2