import mongoose from 'mongoose';

const offeringSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

export default mongoose.models.Offering ||
  mongoose.model('Offering', offeringSchema);
