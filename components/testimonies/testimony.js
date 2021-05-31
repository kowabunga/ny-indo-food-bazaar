import Link from 'next/link';
import PropTypes from 'prop-types';

export default function Testimony({ testimony, isDetailsPage }) {
  return (
    <div
      className={`relative border shadow-sm m-2 rounded w-full sm:w-96 ${
        isDetailsPage ? 'p-5 sm:p-20 sm:w-4/5' : 'p-5'
      } bg-white`}
    >
      <p className={`italic ${!isDetailsPage ? 'truncate' : 'sm:text-2xl'}`}>
        {testimony.comment}
      </p>
      <cite
        className={`text-gray-500 block text-right mt-1 ${
          isDetailsPage && 'sm:text-xl'
        }`}
      >
        - {testimony.name}
      </cite>
      {!isDetailsPage && (
        <Link href={`/testimonials/${testimony._id}`}>
          <a className='hover:underline text-blue-600'>Read more...</a>
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
