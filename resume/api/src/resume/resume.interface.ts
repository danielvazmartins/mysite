import { Document } from "mongoose";

export interface Resume extends Document{
    name: String
}