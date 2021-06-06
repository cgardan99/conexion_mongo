import mongoose from 'mongoose';

const tiempoProgresoSchema = mongoose.Schema({
    general: {
        type: mongoose.Schema.Types.String,
        required: "Especifique el tiempo de progreso general"
    },
    semanal: {
        type: mongoose.Schema.Types.String,
        required: "Especifique el tiempo de progreso semanal"
    },
    mensual: {
        type: mongoose.Schema.Types.String,
        default: "Especifique el tiempo de progreso mensual"
    },
    anual: {
        type: mongoose.Schema.Types.String,
        required: "Especifique el tiempo de progreso anual"
    }
})

const TiempoProgreso = mongoose.tiempoProgreso.model('TiempoProgreso', tiempoProgresoSchema)

export default TiempoProgreso