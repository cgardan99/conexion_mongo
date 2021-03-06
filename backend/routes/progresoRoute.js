import express from 'express'
import { getProgresos, createProgreso, updateProgreso, deleteProgreso, getProgreso, getProgresosByClient } from "../controllers/progresoController.js";
const router = express.Router()


// CRUD Progresoes
router.route('/').get(getProgresos);
router.route('/:oid').get(getProgreso);
router.route('/client/:oid').get(getProgresosByClient);
router.route('/new').post(createProgreso);
router.route('/update/:oid').post(updateProgreso);
router.route('/delete/:oid').get(deleteProgreso);

export default router