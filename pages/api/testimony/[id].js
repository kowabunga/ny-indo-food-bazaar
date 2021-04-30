import Testimony from '../../../models/Testimony';
import connectDb from '../../../utils/db';
import { useRouter } from 'next/router';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  const connection = await connectDb();

  switch (method) {
    case 'GET':
      const testimony = await Testimony.findById(id);

      if (!testimony) {
        res.status(404).json({ msg: 'Could not find testimony' });
        break;
      }
      res.status(200).json(testimony);
      break;
    default:
      res.status(405).json({ msg: `Request method "${method}" not allowed` });
      break;
  }

  connection.disconnect();
}
