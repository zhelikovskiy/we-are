import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
		},
		creator: {
			type: Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
		members: {
			type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
			validate: {
				validator: (v) => {
					return v.length > 0;
				},
				message: 'Room must have at least one member.',
			},
		},
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
		versionKey: false,
		timestamps: true,
	}
);

const Room = mongoose.model('Room', roomSchema);

export default Room;
