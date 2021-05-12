import Offering from '../../../models/Offering';
import Vendor from '../../../models/Vendor';
import connectDb from '../../../middleware/connectDb';

export default connectDb(async function (req, res) {
  const {
    method,
    body: { offering, vendorId },
  } = req;

  try {
    if (method === 'GET') {
      const offerings = await Offering.find({});
      if (!offerings) {
        return res.status(404).json({ msg: 'No vendors found' });
      }

      return res.status(200).json(offerings);
    }

    if (method === 'POST') {
      offering.vendor = vendorId;
      const createdOffering = await Offering.create(offering);

      if (vendorId) {
        await Vendor.updateOne(
          { _id: vendorId },
          { $addToSet: { offerings: createdOffering._id } }
        );
      }

      return res
        .status(201)
        .json({ msg: 'testimony created', createdOffering });
    }

    res.status(405).json({ msg: `Request method "${method}" not allowed` });
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Internal server error', error: error.message });
  }
});
