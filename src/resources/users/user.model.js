import mongoose from 'mongoose'

/** create a schema for data modling */
const schema = {
    email: {type: String, required: [true, 'Please enter yor email'], unique: true, lowercase: true, trim: true },
    password: {type: String, required: [true, 'Please enter yor password'], trim: true, minlength: 6 },
    username: {type: String, trim: true},
    photoURL: String,
    bio: String,
    url: String,
    isAdmin: Boolean
}

/** create the model */
const userSchema = new mongoose.Schema(schema, { timestamps: true})

/** export model */
export const User = mongoose.model('user', userSchema)