import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const mongoUrl = process.env.mongoString

const connectDb = () => {
    return mongoose.connect(mongoUrl)
    .then(()=>console.log('db is connected'))
    .catch((error)=>console.log(error));
};

export { connectDb };



// const connect = mongoose.connect(mongoUrl,
//     {useNewUrlParser: true , useUnifiedTopology: true}
//     )
//     .then(()=> app.listen(3000, () => console.log(`Listening at port ${3000}`)))
//     .catch((error)=> console.log(error));