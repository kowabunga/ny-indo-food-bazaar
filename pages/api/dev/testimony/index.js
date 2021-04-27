import Testimony from '../../../../models/Testimony';
import Vendor from '../../../../models/Vendor';
import connectDb from '../../../../utils/db';

export default async function handler(req, res) {
  const { method, body } = req;

  const connection = await connectDb();

  //@TODO Will have to add JWT to routes
  // Presume JWT is present in req. Will get vendor
  // Selected vendor from dropdown list on form in req.body
  let selectedVendor = '28e5e395-d71b-41fd-9c37-1bcb08ec6b56';

  if (method === 'POST') {
    // First create testimony to get objectId
    const testimony = await Testimony.create(body);

    // Add newly created testimony object id to appropriate vendor testimony array (of object ids)
    await Vendor.updateOne(
      { uuid: selectedVendor },
      { $addToSet: { testimonies: testimony._id } }
    );

    return res.status(201).json({ msg: 'Testimony created' });
  }
  

  connection.disconnect();
}
