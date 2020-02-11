import mongoose from 'mongoose'
import pick from 'lodash.pick'
import bcrypt from 'bcryptjs'

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

/** hash password before save to the database */
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } else {
        next()
    }
})

/** choose user data to send back to client */
userSchema.methods.toJSON = function() {
    let userObject = this.toObject()
    return pick(userObject, ['_id', 'email', 'username', 'photoURL', 'bio', 'url'])

}

/** export model */
export const User = mongoose.model('user', userSchema)