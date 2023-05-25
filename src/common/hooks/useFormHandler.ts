import { useFormik, FormikValues, FormikConfig, FormikHelpers } from 'formik';

type RegisterOption = {
  nameOfValueProps?: string;
  isNumber?: boolean;
  isShowConfirmChanged?: boolean;
  preventTruncate?: boolean;
};

export function useFormHandler<Values extends FormikValues>({ initialValues, onSubmit, validationSchema, ...rest }: FormikConfig<Values>) {
  const handleSubmit = (values: Values, formikHelpers: FormikHelpers<Values>) => {
    formikHelpers.resetForm({ values });
    onSubmit(values, formikHelpers);
  };

  const form = useFormik<Values>({
    initialValues: initialValues as any,
    validationSchema,
    onSubmit: handleSubmit,
    ...rest,
  });

  const handleOnChange = (name: string, isNumber?: boolean) => (e: any) => {
    if (e.target) {
      if (isNumber) {
        form.setFieldValue(name, Number(e.target.value) || e.target.value);
        return;
      }
      return form.handleChange(e);
    }

    if (isNumber) {
      e = Number(e) || e;
    }

    form.setFieldValue(name, e);
  };

  const handleOnblur = (name: string, preventTruncate?: boolean) => (e: any) => {
    let value = e;
    if (e.target) {
      value = e.target.value;
    }

    if (typeof value === 'string' && value && !preventTruncate) {
      value = value.trim();
      form.setFieldValue(name, value, true);
    }

    form.handleBlur(e);
  };

  const register = (name: string, option?: RegisterOption) => {
    return {
      name,
      onChange: handleOnChange(name, option?.isNumber),
      [option?.nameOfValueProps || 'value']: form.values[name],
      onBlur: handleOnblur(name, option?.preventTruncate),
    };
  };

  return { ...form, register };
}
