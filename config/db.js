import mongoose from 'mongoose'


const connectDB = async ()=>{
   try {
  const conn = await mongoose.connect('mongodb+srv://mateenahmad:Database123@cluster0.lbrs4dn.mongodb.net/portfolio-database')

  console.log(`connected to mongoDB ${conn.connection.host}`)
    
   } catch (error) {
    console.log(`mongo DB connection error ${error}`)
    
   }
}

export default connectDB;