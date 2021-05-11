import Image from 'next/image';
export default function Vendor(vendor) {
  return (
    <div className='flex sm:flex-col items-center justify-evenly'>
      {vendor.image && (
        <Image src={vendor.image} alt='' width={200} height={200} />
      )}
      <div>
        <h3 className='text-xl'>{vendor.name}</h3>
        <p>{}</p>
      </div>
    </div>
  );
}