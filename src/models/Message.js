import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema(
	{
		text: {
			type: String,
			required: true,
		},
		author: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		chat: {
			type: Schema.Types.ObjectId,
			ref: 'Chat',
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ versionKey: false }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
