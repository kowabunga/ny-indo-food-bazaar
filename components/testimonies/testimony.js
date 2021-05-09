import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Testimony({ testimony, isDetailsPage }) {
  console.log(isDetailsPage);
  return (
    <div
      className={`relative border shadow-sm m-2 rounded w-96 ${
        isDetailsPage ? 'p-20 w-4/5' : 'p-5 '
      } bg-white`}
    >
      <p className={`italic ${!isDetailsPage ? 'truncate' : 'text-2xl'}`}>
        {testimony.comment}
      </p>
      <cite
        className={`text-gray-500 block text-right mt-1 ${
          isDetailsPage && 'text-xl'
        }`}
      >
        - {testimony.name}
      </cite>
      {!isDetailsPage && (
        <Link href={`/testimonials/${testimony._id}`}>
          <a className='hover:underline text-purple-500'>Read more...</a>
        </Link>
      )}
    </div>
  );
}

Testimony.defaultProps = {
  isDetailsPage: false,
};

Testimony.propTypes = {
  testimony: PropTypes.object.isRequired,
  isDetailsPage: PropTypes.bool.isRequired,
};
