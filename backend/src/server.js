import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.routes.js'
import { connectDB } from './lib/db.js'
import { ENV } from './lib/env.js'


const app = express()

const __dirname = path.resolve();
console.log(__dirname)

const PORT = ENV.PORT || 3000

app.use(express.json()) //req.body
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)


//make ready for deployment
if(ENV.NODE_ENV === "production"){

    app.use(express.static(path.join(__dirname,"../frontend/vite-project/dist")))

    app.get(/.*/,(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend/vite-project/dist/index.html"))
    })
}

app.listen(PORT,async ()=> {
    
    console.log("Serever running on PORT "+PORT)
    await connectDB()
})