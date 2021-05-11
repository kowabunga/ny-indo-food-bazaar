import mongoose from 'mongoose';

//Middleware to check if mongoose connection exists, if so use it. If not create connection
//Prevents the creation/closing of mongoose connection on each hit to api route
export default function handler(apiLogic) {
  return async function (req, res) {
    if (mongoose.connection.readyState) {
      return apiLogic(req, res);
    }

    await mongoose.connect(process.env.MONGO_DB_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    console.log('Creating new connection!');

    return apiLogic(req, res);
  };
}
