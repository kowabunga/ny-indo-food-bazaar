import mongoose from 'mongoose';

export default async function connectDb() {
  try {
    const connection = await mongoose.connect(process.env.mongoDbURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected on ${connection.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
