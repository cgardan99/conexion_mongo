import express from 'express'
import { getEjercicios, createEjercicio, updateEjercicio, deleteEjercicio, getEjercicio } from "../controllers/ejercicioController.js";
const router = express.Router()


// CRUD Ejercicioes
router.route('/').get(getEjercicios);
router.route('/:oid').get(getEjercicio);
router.route('/new').post(createEjercicio);
router.route('/update/:oid').post(updateEjercicio);
router.route('/delete/:oid').get(deleteEjercicio);

export default router