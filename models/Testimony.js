import mongoose from 'mongoose';

const testimonySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  comment: {
    type: String,
    required: true,
  },
  vendor: {
    type: Schema.Types.ObjectId,
    ref: 'vendor',
    default: null,
  },
});

export default mongoose.models.Testimony ||
  mongoose.model('Testimony', testimonySchema);
