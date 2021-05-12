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
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

export default mongoose.models.Testimony ||
  mongoose.model('Testimony', testimonySchema);
