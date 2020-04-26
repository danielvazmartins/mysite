import { Document } from "mongoose";

export interface User extends Document {
    fullName: String,
    email: String,
    password: String,
    enable: Boolean
}