import mongoose from 'mongoose';
const userSchema = new mongoose.userSchema({
    username :{
        type : String,
        required : true,
        unique: true,
    },
    email :{
        type : String,
        required : true,
        unique: true,
    },
    passoword : {
        type : String,
        required : true, 
    },
}, {timestamps: true} );
const User =  mongoose.model('User', userSchema);
export default User;