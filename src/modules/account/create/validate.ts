import * as Yup from 'yup';
import { translate } from 'common/utilities/helper';

export const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required(translate('email_require'))
        .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            translate('field_invalid_email')
        )
        .trim()
        .max(50, translate('must_be_at_most_email')),
    password: Yup.string()
        .required(translate('password_require'))
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&]){9,}/, translate('E_pass_regex'))
        .min(9, translate('E_pass_min_max'))
        .max(255, translate('E_pass_min_max')),
});
