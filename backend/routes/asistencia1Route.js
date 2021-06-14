import express from 'express'
import { getAsistencias, createAsistencia, updateAsistencia, deleteAsistencia, getAsistencia, getAsistenciasCliente } from "../controllers/asistenciaController1.js";
const router = express.Router()


// CRUD Asistencias
router.route('/').get(getAsistencias);
router.route('/:oid').get(getAsistencia);
router.route('/cliente/:oid').get(getAsistenciasCliente);
router.route('/new').post(createAsistencia);
router.route('/update/:oid').post(updateAsistencia);
router.route('/delete/:oid').get(deleteAsistencia);

export default router