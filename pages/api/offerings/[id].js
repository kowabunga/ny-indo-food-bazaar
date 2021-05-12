import Offering from '../../../models/Offering';
import connectDb from '../../../middleware/connectDb';

export default connectDb(async function (req, res) {
  const {
    method,
    query: { id },
  } = req;

  try {
    if (method === 'GET') {
      const offering = await Offering.find({ _id: id });
      if (!offering) {
        return res.status(404).json({ msg: 'No vendors found' });
      }

      return res.status(200).json(offering);
    }

    res.status(405).json({ msg: `Request method "${method}" not allowed` });
  } catch (error) {
    res
      .status(500)
      .json({ msg: 'Internal server error', error: error.message });
  }
});
