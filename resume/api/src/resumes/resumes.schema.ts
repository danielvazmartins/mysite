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
        email: String,
        mobile: Number,
        mobile2: Number,
        address: String,
        aboutMe: String,
        professionalGoals: String,
        skills: [{
            skillType: String,
            skillNames: []
        }]
    }
})