import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.routes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000


app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)






app.listen(PORT,()=> {console.log("Serever running on PORT "+PORT)})