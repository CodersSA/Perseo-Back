// ** Work Model **

import { model, Schema, Document } from 'mongoose';

export interface IWork extends Document {
    userID: string,
    dateStart: Number,
    dateEnd: Number,
    position: string,
    company: string,
    // discipline: string,
    // description: string,
    // media: string
};

export const workSchema = new Schema({
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
    position: {
        type: String,
        required: true,
        trim: true
    },
    company: {
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

export default model<IWork>("Work", workSchema);