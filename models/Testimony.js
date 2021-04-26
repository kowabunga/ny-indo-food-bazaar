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
  uuid: {
    type: String,
    default: null,
  },
});

export default mongoose.models.Testimony ||
  mongoose.model('Testimony', testimonySchema);
