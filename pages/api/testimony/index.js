import Testimony from '../../../models/Testimony';
import Vendor from '../../../models/Vendor';
import connectDb from '../../../utils/db';

export default async function handler(req, res) {
  const {
    method,
    body: { testimony, vendorUuid },
  } = req;

  const connection = await connectDb();

  // Get all Testimonies
  if (method === 'GET') {
    const testimonies = await Testimony.find({});

    if (!testimonies) {
      connection.disconnect();
      return res.status(404).json({ msg: 'Resource not found' });
    }

    connection.disconnect();
    return res.status(200).json(testimonies);
  }

  // Create testimony
  if (method === 'POST') {
    testimony.vendor = vendorUuid;
    console.log(testimony);
    const createdTestimony = await Testimony.create(testimony);

    // Check if vendor uuid is added in request body.
    // If present, add newly created testimony to vendor document
    if (vendorUuid) {
      await Vendor.updateOne(
        { uuid: vendorUuid },
        { $addToSet: { testimonies: createdTestimony._id } }
      );
    }
    connection.disconnect();

    return res.status(201).json({ msg: 'testimony created', createdTestimony });
  }

  res.status(405).json({ msg: `Request method "${method}" not allowed` });
  connection.disconnect();
}
