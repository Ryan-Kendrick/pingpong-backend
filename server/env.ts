import * as dotenv from 'dotenv'
import path from 'path'
const envPath = path.join(__dirname, '../.env')
dotenv.config({ path: envPath })
