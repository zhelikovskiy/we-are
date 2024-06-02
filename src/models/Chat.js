import mongoose from 'mongoose';
const { Schema } = mongoose;

const chatSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		isPrivate: {
			type: Boolean,
			default: false,
		},
		creator: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		users: [
			{
				type: Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		messages: [
			{
				type: Schema.Types.ObjectId,
				ref: 'Message',
			},
		],
		createdAt: {
			type: Date,
			default: Date.now,
		},
		updatedAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		virtuals: {
			usersCount: {
				get() {
					return this.users.length;
				},
			},
		},
		versionKey: false,
	}
);

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;
