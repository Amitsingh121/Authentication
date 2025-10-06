import mongoose from "mongoose";

export const connection = ()=> {
mongoose.connect(process.env.MONGO_URI,{
    dbName:"AUTHENTICATION"
}).then(()=>{
    console.log("database connected");
}).catch((error) => {
    console.error("Database connection error:", error);
});
}