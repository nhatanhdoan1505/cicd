import { FormItemProps, Form } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';

export default function FormItem({ errorMsg, ...props }: { errorMsg: string | undefined } & FormItemProps) {
  return (
    <Form.Item {...props}>
      {props.children}
      <AnimatePresence>
        {errorMsg && (
          <motion.div
            className="ant-form-item-explain "
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p role="alert" className="ant-form-item-explain-error">
              {errorMsg}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Form.Item>
  );
}

export function FormItems({ className, errorMsg, children }: { className?: string; errorMsg: string; children: any }) {
  return (
    <div className={className}>
      {children}
      <AnimatePresence>
        {errorMsg && (
          <motion.div
            className="ant-form-item-explain"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p role="alert" className="ant-form-item-explain-error">
              {errorMsg}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
