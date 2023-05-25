import clsx from 'clsx';

type Props = {
  className?: {
    root?: string;
    label?: string;
    error?: string;
  };
  children: any;
  label?: string;
  errorMsg?: string;
};

export default function FormControl({ children, className, label, errorMsg }: Props) {
  return (
    <div className={clsx('flex flex-col pb-7', className?.root)}>
      {label && <p className={clsx('mb-2 font-bold text-[#172b4d]', className?.label)}>{label}</p>}
      {children}
      {errorMsg && <p className={clsx('mt-[6px] text-sm text-[#FF353C]', className?.error)}>{errorMsg}</p>}
    </div>
  );
}
