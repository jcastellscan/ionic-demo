import * as mongoose from 'mongoose';

export const InformativeSchema = new mongoose.Schema({
	title: String,
	subTitle: String,
	description: String,
	liked: Boolean,
	likes: Number
})