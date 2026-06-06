import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.routes.js'

dotenv.config()

const app = express()

const __dirname = path.resolve();
console.log(__dirname)

const PORT = process.env.PORT || 3000


app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)


//make ready for deployment
if(process.env.NODE_ENV === "production"){
    console.log(process.env.NODE_ENV)
    app.use(express.static(path.join(__dirname,"../frontend/vite-project/dist")))

    app.get(/.*/,(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/vite-project/dist/index.html"))
    })
}

app.listen(PORT,()=> {console.log("Serever running on PORT "+PORT)})