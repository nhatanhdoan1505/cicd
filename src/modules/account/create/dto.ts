import { ROLE } from 'common/constants/role';

export class LoginResDto {
  token: string;
  role: ROLE;
  fullName: string;
  email: string;
  key: string;
}

export class CreateAccount {
  loginId: string;
  email: string;
  initialPassword: string;
  familyNameFirst: string;
  familyNameLast: string;
  furiganaNameFirst: string;
  furiganaNameLast: string;
  role: ROLE;
  accountStatus: boolean;
}
