import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

export const UserData = mongoose.models.details || mongoose.model('details', userSchema);