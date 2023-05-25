export const errorCode = {
  createUser: {
    is_exist: 'このメールアドレスは既に使用されています。',
  } as any,
  resetPassword: {
    expired_token: 'パスワード変更リンクの有効期限は申請から24時間以内です。24時間を超えた場合は再度申請手続きをお願いいたします。',
    used_token: '既にパスワード変更がされているため無効となります。再度パスワード変更を行う場合、改めて変更申請の手続きを行ってください。',
  } as any,
};
