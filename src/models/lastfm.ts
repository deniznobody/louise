import mongoose, { Document, Schema } from 'mongoose';

interface ILstfm extends Document {
  userId: String;
  username: string;
}

const lstfmSchema: Schema = new Schema({
  userId: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true }
});

const Lstfm = mongoose.model<ILstfm>('Lstfm', lstfmSchema);

export { Lstfm, ILstfm };
