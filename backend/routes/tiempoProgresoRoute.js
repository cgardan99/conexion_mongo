import express from 'express'
import { getTiempoProgresos, createTiempoProgreso, updateTiempoProgreso, deleteTiempoProgreso, getTiempoProgreso } from "../controllers/tiempoProgresoController.js";
const router = express.Router()


// CRUD TiempoProgresoes
router.route('/').get(getTiempoProgresos);
router.route('/:oid').get(getTiempoProgreso);
router.route('/new').post(createTiempoProgreso);
router.route('/update/:oid').post(updateTiempoProgreso);
router.route('/delete/:oid').get(deleteTiempoProgreso);

export default router