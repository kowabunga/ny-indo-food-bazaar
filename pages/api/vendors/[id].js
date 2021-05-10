import Vendor from '../../../models/Vendor';
import connectDb from '../../../utils/db';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  const connection = await connectDb();

  try {
    if (method === 'GET') {
      const vendor = await Vendor.find(id);
      if (!vendor) {
        connection.disconnect();
        return res.status(404).json({ msg: `Vendor with id ${id} not found` });
      }
      return res.status(200).json(vendor);
    }

    res.status(405).json({ msg: `Request method "${method}" not allowed` });
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Internal server error', error: error.message });
  }
  connection.disconnect();
}
