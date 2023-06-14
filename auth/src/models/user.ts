import mongoose from "mongoose";

//An interface that describes the properties
// that are required to create a user
interface UserAttrs{
    email: string;
    password: string
}

interface UserModel extends mongoose.Model<any> {
    build(attrs: UserAttrs): any;
}

// An interface that describes the properties
// that a User Docuement has
interface UserDoc extends mongoose.Document{
    email: string,
    password: string
}

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

userSchema.statics.build=(attrs: UserAttrs)=>{
    return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('user', userSchema);

export {User};