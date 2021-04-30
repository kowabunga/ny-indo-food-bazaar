import Testimony from '../../../models/Testimony';
import connectDb from '../../../utils/db';
import { useRouter } from 'next/router';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  const connection = await connectDb();

  // Get testimony by id
  if (method === 'GET') {
    const testimony = await Testimony.findById(id);

    if (!testimony) {
      return res.status(404).json({ msg: 'Could not find testimony' });
    }

    connection.disconnect();
    return res.status(200).json(testimony);
  }

  //@TODO - get rid of uuid and just work with mongodb id
  // Delete testimony (admin only)
  if (method === 'DELETE') {
    const testimony = await Testimony.findById({ _id: id });

    await Testimony.deleteOne({ _id: id });

    // Once testimony is deleted, we must remove the ref to it from the appropriate Vendor
    await Vendor.updateOne(
      { uuid: testimony.uuid },
      { $pull: { testimonies: testimony._id } }
    );

    console.log('here');

    return;
  }

  connection.disconnect();
  return res
    .status(405)
    .json({ msg: `Request method "${method}" not allowed` });
}
