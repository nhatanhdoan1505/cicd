import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-full justify-center items-center gap-6 text-[#333]">
      <p className="text-9xl font-bold">404</p>
      <p className="text-2xl font-bold mt-2">Not Found</p>
      <p className="">The resource requested could be found on this server</p>
      <Link href="#">
        <a className="underline text-primary"> Back to Home</a>
      </Link>
    </div>
  );
};

export default NotFound;
