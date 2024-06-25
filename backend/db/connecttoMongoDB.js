import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URI,);
       console.log("connected to MongoDB")
    } catch (error) {
      console.log("Error connecting to MongoDB",error)   
    }
}

export default connectToMongoDB;