import express from 'express'
import { getClients, createClient, updateClient, deleteClient, getClient } from "../controllers/clientController.js";
const router = express.Router()


// CRUD Clientes
router.route('/').get(getClients);
router.route('/:oid').get(getClient);
router.route('/new').post(createClient);
router.route('/update/:oid').post(updateClient);
router.route('/delete/:oid').get(deleteClient);

export default router