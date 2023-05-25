import React from 'react';
import { Typography } from 'antd';
import Link from 'next/link';
const { Paragraph } = Typography;

type Props = {};

export default function Success({}: Props) {
  return (
    <div className="h-full bg-white flex form-sndl-css justify-center items-center">
      <div className="w-[350px] -mt-[8%]">
        <div className="logo-admin text-center mb-[8px]">
          <img alt="logo" src="/assets/images/logo.png" />
        </div>
        <Typography className="text-[16px] font-sf_pro text-center text-[#303030] leading-[1.4] font-[600] mb-[12px]">メールを送りました</Typography>
        <Paragraph className="mx-auto block max-w-[300px] text-[12px] font-sf_pro text-center text-[#838383] font-[300] leading-[1.5] mb-[20px]">
          受信したメールアドレスからパスワードの再設定を行ってください。
        </Paragraph>

        <div className="flex flex-col">
          <Link href="/login">
            <a className="bg-[#FF858B] flex justify-center items-center text-[14px] font-[500] leading-[1.5] h-[50px] text-white rounded-[6px] cursor-pointer">
              ログインへ戻る
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
