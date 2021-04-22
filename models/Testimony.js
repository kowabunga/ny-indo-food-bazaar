import { Schema, model } from 'mongoose';

const TestimonySchema = new Schema({
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

const Testimony = model('Testimony', TestimonySchema);

export default Testimony;
