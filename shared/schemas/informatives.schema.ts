import * as mongoose from 'mongoose';

export const InformativeSchema = new mongoose.Schema({
	title: String,
	description: String,
	liked: Boolean,
	likes: Number
})