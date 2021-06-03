import mongoose from 'mongoose';
import dotenv  from 'dotenv'

dotenv.config()

mongoose.main_conn = mongoose.createConnection(process.env.DB_MAIN);
mongoose.client_v_1 = mongoose.createConnection(process.env.DB_CLIENTES_V_1);
mongoose.client_v_2 = mongoose.createConnection(process.env.DB_CLIENTES_V_2);
mongoose.mensualidad_h_1 = mongoose.createConnection(process.env.DB_MENSUALIDAD_H_1);
mongoose.mensualidad_h_2 = mongoose.createConnection(process.env.DB_MENSUALIDAD_H_2);

export default mongoose;