//Importamos las variables de entorno
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

//Importamos el creador de cliente de Supabase
import { createClient } from "@supabase/supabase-js";
//Creamos el cliente llamado supabase y le pasamos tanto la URL como la API_KEY
const supabase = createClient(API_URL, API_KEY);

export default supabase;
