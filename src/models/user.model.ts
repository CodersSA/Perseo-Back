// ** User Model **

import { model, Schema, Document } from 'mongoose';
import { compareHash, encrypt } from '../helpers/bcrypt';

export interface IUser extends Document {
    _id: string,
    email: string
    password: string
}

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

userSchema.pre<IUser>('save', async function (next) {
    const user = this;
    if (!user.isModified("password")) return next();

    // New user
    const hash = await encrypt(user.password);
    user.password = hash;

    next();
});

userSchema.methods.comparePassword = async function (password: string, hash: string): Promise<boolean> {
    return await compareHash(password, hash);
};

export default model<IUser>("User", userSchema);