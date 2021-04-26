import Testimony from '../../../../models/Testimony';
import Vendor from '../../../../models/Vendor';
import connectDb from '../../../../utils/db';
import { testimonies } from '../../../../data/data';

export default async function handler(req, res) {
  const { method, body } = req;

  const connection = await connectDb();

  console.log(body);

  //@TODO Will have to add JWT to routes
  // Presume JWT is present in req. Will get vendor
  // Selected vendor from dropdown list on form in req.body
  let selectedVendor = 'be6570ff-8791-4055-b77e-7bdac7d03d5f';
  if (method === 'POST') {
      
    
  }

  connection.disconnect();
}
