import * as Yup from 'yup';
import { translate } from 'common/utilities/helper';
import { VEmail, VPassword } from 'common/constants/validate';

export const validationSchemaForgot = Yup.object().shape({
  email: Yup.string()
    .required(translate('email_require'))
    .matches(VEmail, translate('field_invalid_email'))
    .trim()
    .max(50, translate('must_be_at_most_email')),
});
export const validationSchemaReset = Yup.object().shape({
  password: Yup.string()
    .required(translate('password_require'))
    .matches(VPassword, translate('E_pass_regex'))
    .min(9, translate('E_pass_min_max'))
    .max(255, translate('E_pass_min_max')),
  confirmPassword: Yup.string()
    .required(translate('password_require'))
    .matches(VPassword, translate('E_pass_regex'))
    .min(9, translate('E_pass_min_max'))
    .max(255, translate('E_pass_min_max'))
    .oneOf([Yup.ref('password'), null], '新しいパスワードと同じパスワードを入力してください。'),
});
