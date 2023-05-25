import { Input, Form, Button, Typography } from 'antd';
import { useFormHandler } from 'common/hooks';
import { validationSchemaForgot } from '../validate';
import FormItem from 'common/components/form/item';
import { useEffect } from 'react';
import { isEmpty } from 'lodash';

const { Paragraph } = Typography;

export type FormValueForgot = {
  email: string;
};

export interface Props {
  submit: (data: FormValueForgot) => any;
  loading: boolean;
  messageError: string;
  setMessageError: (data: string) => any;
}

function ForgotPass({ submit, loading, messageError, setMessageError }: Props) {
  const form = useFormHandler<FormValueForgot>({
    initialValues: { email: '' },
    validationSchema: validationSchemaForgot,
    onSubmit: submit,
  });

  useEffect(() => {
    if (messageError) {
      setMessageError('');
    }
  }, [form.values]);

  return (
    <div className="h-full bg-white flex form-sndl-css justify-center">
      <Form onFinish={form.handleSubmit} className="flex items-center justify-center" layout="vertical">
        <div className="w-[350px] -mt-[8%]">
          <div className="logo-admin text-center mb-[8px]">
            <img alt="logo" src="/assets/images/logo.png" />
          </div>
          <Typography className="text-[16px] font-sf_pro text-center text-[#303030] leading-[1.4] font-[600] mb-[12px]">パスワード再発行</Typography>
          <Paragraph className="mx-auto block max-w-[300px] text-[12px] font-sf_pro text-center text-[#838383] font-[300] leading-[1.5] mb-[10px]">
            登録したメールアドレスを入力してください。パスワードのリセット手順を送付します。
          </Paragraph>
          <FormItem className="mb-[20px]" errorMsg={form.errors.email}>
            <Input
              {...form.register('email')}
              className="w-full h-50 border-2 rounded-[5px] bg-[#EBEBEB] border-bd-colors"
              placeholder="メールアドレス"
            />
          </FormItem>

          <div className="flex flex-col">
            {messageError && <p className="pb-[10px] error-msg">{messageError}</p>}
            <Button
              loading={loading}
              htmlType="submit"
              disabled={!form.dirty || !isEmpty(form.errors) || !!messageError}
              className="bg-[#FF858B] text-[14px] font-[500] leading-[1.5] h-[50px] text-white rounded-[6px]"
            >
              送信する
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default ForgotPass;
