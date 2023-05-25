import * as Yup from 'yup';
import { translate } from 'common/utilities/helper';
import { VPassword } from 'common/constants/validate';

export const validationSchema = Yup.object().shape({
  loginId: Yup.string().required(translate('email_require')).trim(),
  password: Yup.string()
    .required(translate('password_require'))
    .matches(VPassword, translate('E_pass_regex'))
    .min(9, translate('E_pass_min_max'))
    .max(255, translate('E_pass_min_max')),
});
