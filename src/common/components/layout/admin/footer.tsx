import { Typography } from 'antd';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="h-32 px-9 flex flex-col items-end justify-center bg-[#FFFFFF] border-t border-solid border-gray-100" style={{ zIndex: 1 }}>
      <div className="flex">
        <Link href="#">
          <a className="text-sm text-black-lighter-1 underline">利用規約</a>
        </Link>
        <Link href="#">
          <a className="mx-8 text-sm text-black-lighter-1 underline">利用規約</a>
        </Link>
      </div>
      <Typography className="mt-5 text-sm text-black-lighter-1">利用規約</Typography>
    </div>
  );
}
