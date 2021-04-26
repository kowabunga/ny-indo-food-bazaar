import Vendor from '../../../../models/Vendor';
import connectDb from '../../../../utils/db';
import { vendors } from '../../../../data/data';

//@TODO Add error handling
export default async function handler(req, res) {
  const { method, body } = req;

  const connection = await connectDb();

  console.log(body);

  switch (method) {
    case 'POST':
      await Vendor.create(vendors);
      res.status(201).json({ msg: 'Vendor added' });
      break;
    default:
      res.status(200).json({ msg: 'Hello world' });
      break;
  }

  connection.disconnect();
}
