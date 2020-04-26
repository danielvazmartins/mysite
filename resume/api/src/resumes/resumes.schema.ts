import * as mongoose from 'mongoose'

const ObjectId = mongoose.Schema.Types.ObjectId

export const ResumesSchema = new mongoose.Schema({
    userId: ObjectId,
    name: String,
    description: String
})