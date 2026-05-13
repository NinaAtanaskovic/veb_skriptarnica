import mongoose from "mongoose";
const connectDB = async ()=> {
   try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoBD Connected: ${conn.connection.host}`);
    
   } catch (error) {
    console.log(`Error connecting to MongoBD: ${error.message}`);
    process.exit(1);
   }
}
export default connectDB;