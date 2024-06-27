import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema(
	{
		text: {
			type: String,
			required: true,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		room: {
			type: Schema.Types.ObjectId,
			ref: 'Room',
			required: true,
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{ versionKey: false, timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
