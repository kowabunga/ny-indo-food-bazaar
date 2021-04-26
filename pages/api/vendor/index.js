import Vendor from '../../../models/Vendor';

export default async function handler(req, res) {
  const { method, body } = req;

  console.log(body);

  switch (method) {
    case 'POST':
      await Vendor.create(body);
      res.status(201).json({ msg: 'Vendor added' });
      break;
    default:
      res.status(200).json({ msg: 'Hello world' });
      break;
  }
}
