import mongoose from 'mongoose';

const progresoSchema = mongoose.Schema({
    diferencia_peso: {
        type: Number,
        required: "Especifique la diferencia en peso"
    },
    diferencia_repeticiones:{
        type: Date,
        required: "Especifique la diferencia en repeticiones"
    },
    diferencia_peso_corporal: {
        type: mongoose.Schema.Types.String,
        default: "Especifique la diferencia en peso corporal"
    },
    diferencia_RM: {
        type: Boolean,
        required: "Especifique la diferencia en RM"
    },
    oid_tiempo_progreso: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Especifique el ID de tiempo de progreso"
    },
    oid: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Especifique el ID del cliente",
        unique: true 
    }
})

const Progreso = mongoose.main_conn.model('Progreso', progresoSchema)

export default Progreso