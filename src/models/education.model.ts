// ** Education Model **

import { model, Schema, Document } from 'mongoose';

export interface IEducation extends Document {
    userID: string,
    dateStart: Number,
    dateEnd: Number,
    titulation: string,
    center: string,
    // discipline: string,
    // description: string,
    // media: string
};

export const educationSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    dateStart: {
        type: Number,
        default: 0
    },
    dateEnd: {
        type: Number,
        default: 0
    },
    titulation: {
        type: String,
        required: true,
        trim: true
    },
    center: {
        type: String,
        required: true,
        trim: true
    },
    // discipline: {
    //     type: String
    // },
    // description: {
    //     type: String
    // },
    // media: {
    //     type: String
    // }
});

export default model<IEducation>("Education", educationSchema);