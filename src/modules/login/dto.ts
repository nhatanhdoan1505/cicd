import { ROLE } from 'common/constants/role';

export class LoginResDto {
  token: string;
  role: ROLE;
  fullName: string;
  loginId: string;
  key: string;
}

export class LoginReqDto {
  loginId: string;
  password: string;
}
