import { Document } from 'mongoose';

export interface Informative extends Document {
	_id: string;
	title: string;
	subTitle: string;
	description: string;
	liked: boolean;
	likes: number;
}
