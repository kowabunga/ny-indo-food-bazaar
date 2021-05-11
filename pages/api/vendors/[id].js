import Vendor from '../../../models/Vendor';
import connectDb from '../../../middleware/connectDb';

export default connectDb(async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;

  try {
    if (method === 'GET') {
      const vendor = await Vendor.findById(id);
      if (!vendor) {
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
});
