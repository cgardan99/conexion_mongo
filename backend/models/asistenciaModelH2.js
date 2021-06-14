import mongoose from 'mongoose';

const asistenciaH2 = mongoose.Schema({
    asistencia: {
        type: Boolean,
        required: "Especifique la asistencia"
    },
    fecha: {
        type: Date,
        required: "Especifique la fecha"
    },
    horario: {
        type: mongoose.Schema.Types.String,
        default: "6:00 - 7:00"
    },
    oid: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Defina para qué cliente es esta asistencia",
        unique: true
    }
})

const AsistenciaH2 = mongoose.asistencia_h_2.model('AsistenciaH2', asistenciaH2)

export default AsistenciaH2