import Testimony from '../../../models/Testimony';
import connectDb from '../../../utils/db';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  const connection = await connectDb();

  try {
    // Get testimony by id
    if (method === 'GET') {
      const testimony = await Testimony.findById(id);

      if (!testimony) {
        return res.status(404).json({ msg: 'Could not find testimony' });
      }

      connection.disconnect();
      return res.status(200).json(testimony);
    }

    // Delete testimony (admin only)
    if (method === 'DELETE') {
      const testimony = await Testimony.findById({ _id: id });

      await Testimony.deleteOne({ _id: id });

      // Once testimony is deleted, we must remove the ref to it from the appropriate Vendor
      await Vendor.updateOne(
        { _id: testimony.vendor },
        { $pull: { testimonies: testimony._id } }
      );

      console.log('here');

      connection.disconnect();
      return res.status(200).json({msg:'Testimony deleted'});
    }

    res.status(405).json({ msg: `Request method "${method}" not allowed` });
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Internal server error', error: error.message });
  }
  connection.disconnect();
}
