export type LanguageKey = 'en' | 'jp';

type MultiLanguage = {
  [key: string]: {
    [key in LanguageKey]: string;
  };
};

const multiLanguage: MultiLanguage = {
  email_pwd_incorrect: {
    en: 'email or password is incorrect',
    jp: 'メールアドレスもしくはパスワードが正しくありません。',
  },
  home_page: {
    en: 'Home',
    jp: 'ホーム',
  },
  accounts_page: {
    en: 'Account',
    jp: 'アカウント管理',
  },
  management_services: {
    en: 'Management Services',
    jp: '契約企業管理',
  },
  payment_page: {
    en: 'Payments',
    jp: '決済情報管理',
  },
  users_page: {
    en: 'Users',
    jp: 'ユーザー管理',
  },
  setting_page: {
    en: 'Setting',
    jp: 'アカウント設定',
  },
  email_invalid: {
    en: 'Invalid email',
    jp: 'メールアドレスの形式が正しくありません。 ご確認ください。',
  },
  email_require: {
    en: 'Require',
    jp: '必須項目に入力してください。',
  },
  password_require: {
    en: 'Require',
    jp: '必須項目に入力してください。',
  },
  login: {
    en: 'Login',
    jp: 'ログイン',
  },
  field_invalid_email: {
    en: 'field_invalid_email',
    jp: 'メールアドレスの形式が正しくありません。 ご確認ください。',
  },
  must_be_at_most_email: {
    en: 'must_be_at_most_email',
    jp: 'メールアドレスは50文字以内で入力してください。',
  },
  E_pass_min_max: {
    en: 'E_pass_min_max',
    jp: 'パスワードはハイフンを入れずに半角9～255桁で入力してください。',
  },
  E_pass_regex: {
    en: 'E_pass_regex',
    jp: 'パスワードは、少なくとも9文字、1つの数字、1つの特殊文字、大文字と小文字の両方を含む必要があります。 ',
  },
};

export default multiLanguage;
