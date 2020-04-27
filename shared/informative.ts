import { Document } from 'mongoose';

export interface Informative extends Document {
	_id: string;
	title: string;
	description: string;
	liked: boolean;
	likes: number;
}
