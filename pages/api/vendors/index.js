import Vendor from '../../../models/Vendor';
import connectDb from '../../../utils/db';

export default async function handler(req, res) {
  const { method, body } = req;

  const connection = await connectDb();

  try {
    if (method === 'GET') {
      const vendors = await Vendor.find({});
      if (!vendors) {
        connection.disconnect();
        return res.status(404).json({ msg: 'No vendors found' });
      }
      return res.status(200).json(vendors);
    }

    if (method === 'POST') {
      await Vendor.create(body);
      connection.disconnect();
      return res.status(201).json({ msg: 'Vendor added' });
    }

    res.status(405).json({ msg: `Request method "${method}" not allowed` });
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Internal server error', error: error.message });
  }
  connection.disconnect();
}
