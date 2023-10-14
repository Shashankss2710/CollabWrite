import mongoose from "mongoose";

const Connection = async (username="user1", password="27102001")=>{
    const url="mongodb+srv://${username}:${password}@CollabWrite.rfhw2gv.mongodb.net/?retryWrites=true&w=majority";
}


try{
  await mongoose.connect("mongodb+srv://user1:27102001@CollabWrite.rfhw2gv.mongodb.net/?retryWrites=true&w=majority",{useUnifiedTopology:true,useNewUrlParser:true});
   console.log('database connected successfully');
}catch(error){
    console.log('error while connecting to database',error);
}


export default Connection;