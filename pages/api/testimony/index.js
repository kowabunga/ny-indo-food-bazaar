import Testimony from '../../../models/Testimony';
import Vendor from '../../../models/Vendor';
import connectDb from '../../../utils/db';

export default async function handler(req, res) {
  const {
    method,
    body: { testimony, vendorUuid },
  } = req;

  const connection = await connectDb();

  switch (method) {
    case 'GET':
      // Get all testimonies
      const testimonies = await Testimony.find({});

      if (!testimonies) {
        res.status(404).json({ msg: 'Resource not found' });
        break;
      }

      res.status(200).json(testimonies);
      break;

    case 'POST':
      const createdTestimony = await Testimony.create(testimony);

      // Check if vendor uuid is added in request body.
      // If present, add newly created testimony to vendor document
      if (vendorUuid) {
        await Vendor.updateOne(
          { uuid: vendorUuid },
          { $addToSet: { testimonies: createdTestimony._id } }
        );
      }

      res.status(201).json({ msg: 'testimony created', createdTestimony });
      break;
    default:
      res.status(405).json({ msg: `Request method "${method}" not allowed` });
      break;
  }
  connection.disconnect();
}
