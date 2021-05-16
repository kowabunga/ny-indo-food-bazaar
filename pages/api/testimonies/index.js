import Testimony from '../../../models/Testimony';
import Vendor from '../../../models/Vendor';
import connectDb from '../../../middleware/connectDb';

export default connectDb(async function handler(req, res) {
  const {
    method,
    body: { testimony, vendorId },
  } = req;
  // const connection = await connectDb();

  try {
    if (method === 'GET') {
      const testimonies = await Testimony.find({});

      if (!testimonies) {
        return res.status(404).json({ msg: 'Resource not found' });
      }

      return res.status(200).json(testimonies);
    }
    // Test vendor _id's
    // 6090332babd1f32a60bf1407
    // 6090332babd1f32a60bf1404
    // Create testimony
    if (method === 'POST') {
      console.log('This route is hit!');
      console.log({ vendorId });
      if (vendorId !== '') testimony.vendor = vendorId;
      const createdTestimony = await Testimony.create(testimony);

      // // Check if vendor id is added in request body.
      // // If present, add newly created testimony to vendor document
      if (vendorId !== '') {
        await Vendor.updateOne(
          { _id: vendorId },
          { $addToSet: { testimonies: createdTestimony._id } }
        );
      }

      return res
        .status(201)
        .json({ msg: 'testimony created', createdTestimony });
    }

    res.status(405).json({ msg: `Request method "${method}" not allowed` });
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Internal server error', error: error.message });
  }
});
