import { Input, Form, Button, Typography } from 'antd';
import Link from 'next/link';
import { useFormHandler } from 'common/hooks';
import { validationSchema } from '../validate';
import FormItem from 'common/components/form/item';
import { isEmpty } from 'lodash';

const { Paragraph } = Typography;

export type FormValue = {
  loginId: string;
  password: string;
};

export interface Props {
  submit: (data: FormValue) => any;
  loading: boolean;
}

function Login({ submit, loading }: Props) {
  const form = useFormHandler<FormValue>({
    initialValues: { loginId: '', password: '' },
    validationSchema,
    onSubmit: submit,
  });

  return (
    <div className="h-full bg-white flex form-sndl-css justify-center">
      <Form onFinish={form.handleSubmit} className="flex items-center justify-center" layout="vertical">
        <div className="w-[350px]">
          <div className="logo-admin text-center mb-[55px]">
            <img alt="logo" src="/assets/images/logo.png" />
          </div>
          <FormItem className="mb-[20px]" errorMsg={form.errors.loginId}>
            <Input
              {...form.register('loginId')}
              className="w-full border-2 h-50 rounded-[6px] bg-[#EBEBEB] border-bd-colors"
              placeholder="メールアドレス"
            />
          </FormItem>
          <FormItem className="mb-[20px]" errorMsg={form.errors.password}>
            <Input.Password
              {...form.register('password')}
              className="cursor-pointer w-full h-50 rounded-[6px] border-2 bg-[#EBEBEB] border-bd-colors"
              placeholder="パスワード"
              iconRender={(visible) =>
                visible ? <img alt="eye" src="/assets/images/eye_active.svg" /> : <img alt="eye" src="/assets/images/eye_unactive.svg" />
              }
            />
          </FormItem>

          <div className="flex flex-col">
            <Button
              loading={loading}
              htmlType="submit"
              disabled={!form.dirty || !isEmpty(form.errors)}
              className="bg-[#FF858B] text-[14px] font-[500] leading-[1.5] h-[50px] text-white rounded-[6px]"
            >
              ログイン
            </Button>
          </div>
          <Paragraph className="text-[10px] text-center text-[#666] font-[500] mt-[10px]">
            パスワードを忘れた方は
            <Link href="/forgot-password">
              <a className="text-[#FF858B] text-[10px] align-middle no-underline">こちら</a>
            </Link>
          </Paragraph>
        </div>
      </Form>
    </div>
  );
}

export default Login;
