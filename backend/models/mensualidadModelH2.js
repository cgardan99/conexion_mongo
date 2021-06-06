import mongoose from 'mongoose';

const mensualidadSchemaH2 = mongoose.Schema({
    costo: {
        type: Number,
        required: "Especifique el costo de la mensualidad"
    },
    fecha_inscripcion:{
        type: Date,
        required: "Especifique la fecha de inscripción"
    },
    horario: {
        type: mongoose.Schema.Types.String,
        default: "8:00 - 9:00"
    },
    pagado: {
        type: Boolean,
        required: "Especifique si la mensualidad ya ha sido pagada"
    },
    oid: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Defina para qué cliente es esta inscripción",
        unique: true
    }
})

const MensualidadH2 = mongoose.mensualidad_h_1.model('MensualidadH2', mensualidadSchemaH2)

export default MensualidadH2