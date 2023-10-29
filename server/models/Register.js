import mongoose from "mongoose";
const Schema = mongoose.Schema;

let registerSchema = new Schema({
    user: {
        type: String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type: String,
        required:true
    }
});

export default mongoose.model('Register',registerSchema);