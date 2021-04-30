import mongoose from 'mongoose';

export default async function connectDb() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB Connected on ${connection.connection.host}`);
    return connection;
  } catch (error) {
    console.error(error);
  }
}
