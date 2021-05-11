import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 6,
  },
  passwordResetToken: {
    type: String,
    default: null,
  },
  passwordResetTokenExpiry: {
    type: String,
    default: Date.now,
  },
  items: [
    {
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
    },
  ],
  testimonies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Testimony',
    },
  ],
});

// Check hashed password and submitted password on login
vendorSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Have mongodb run the password hash function on vendor save and/or if password has been modified
vendorSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  } else {
    const hashedPassword = await bcrypt.hash(
      this.password,
      await bcrypt.genSalt(10)
    );
    this.password = hashedPassword;
  }
});

console.log(mongoose.models);

export default mongoose.models.Vendor || mongoose.model('Vendor', vendorSchema);
