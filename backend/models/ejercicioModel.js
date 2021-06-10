import mongoose from 'mongoose';

const ejercicioSchema = mongoose.Schema({
    nombre_ejercicio: {
        type: Number,
        required: "Especifique el costo de la ejercicio"
    },
    peso_estandar_sexo:{
        type: Date,
        required: "Especifique la fecha de inscripción"
    },
    repeticiones: {
        type: mongoose.Schema.Types.String,
        default: "Especifique el numero de repeticiones."
    },
    RM: {
        type: Boolean,
        required: "Especifique si la ejercicio ya ha sido pagada"
    },
    peso_capaz: {
        type: Boolean,
        required: "Especifique si la ejercicio ya ha sido pagada"
    },
    oid: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Defina para qué cliente es esta inscripción",
        unique: true
    }
})

const Ejercicio = mongoose.main_conn.model('Ejercicio', ejercicioSchema)

export default Ejercicio