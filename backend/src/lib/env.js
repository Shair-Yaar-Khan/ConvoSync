import dotenv from 'dotenv'
dotenv.config()

export const ENV = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV : process.env.NODE_ENV,
  JWT_SECRET : process.env.JWT_SECRET,
  CLOUDINARY_CLOUD_NAME:process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET:process.env.CLOUDINARY_API_SECRET,
  ARCJET_KEY:process.env.ARCJET_KEY,
  ARCJET_ENV:process.env.ARCJET_ENV
}



// PORT=3000
// MONGO_URI=mongodb://shairyaark932_db_user:vTl3PMXSbKAXXL9K@ac-6c6b9j7-shard-00-00.my29qnu.mongodb.net:27017,ac-6c6b9j7-shard-00-01.my29qnu.mongodb.net:27017,ac-6c6b9j7-shard-00-02.my29qnu.mongodb.net:27017/ConvoSync?ssl=true&replicaSet=atlas-p2td5m-shard-0&authSource=admin&appName=Cluster0
// NODE_ENV=development
// JWT_SECRET=35770cc986828f0a60cf2db5b275e0aba0de769a

// RESEND_API_KEY=re_iVNtAaqx_Aa3bRu8jFM9uoQN3QUtAT4ju
// EMAIL_FROM=shairyaark932@gmail.com
// EMAIL_FROM_NAME="Shair yaar khan"
// CLIENT_URL=http://localhost:5713