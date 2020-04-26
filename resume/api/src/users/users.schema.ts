import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    fullName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    enable: Boolean
})