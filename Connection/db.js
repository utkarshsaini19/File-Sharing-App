import mongoose from "mongoose";

const connection = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser : true})
        console.log("Connected to Database Successfully !");
    } catch (error) {
        console.log("Connection error :",error.message);
    }
}

export default connection