import express from 'express'
import { getMensualidades, createMensualidad, updateMensualidad, deleteMensualidad, getMensualidad } from "../controllers/mensualidadController2.js";
const router = express.Router()


// CRUD Mensualidades
router.route('/').get(getMensualidades);
router.route('/:oid').get(getMensualidad);
router.route('/new').post(createMensualidad);
router.route('/update/:oid').post(updateMensualidad);
router.route('/delete/:oid').get(deleteMensualidad);

export default router