import * as mongoose from 'mongoose'

const ObjectId = mongoose.Schema.Types.ObjectId

export const ResumesSchema = new mongoose.Schema({
    userId: ObjectId,
    name: String,
    description: String,
    domain: String,
    model: String,
    style: String,
    resume: {
        name: String,
        occupation: String,
        dateOfBirth: String,
        email: String
    }
})