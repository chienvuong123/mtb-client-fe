import { Input } from 'antd';
import type { InputProps } from 'antd';

interface UIInputProps extends InputProps {
  label?: string;
}

const UIInput = ({ label, ...props }: UIInputProps) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="font-medium text-[#4c4c4c] text-sm text-gray-700">
          {label}
        </label>
      )}
      <Input
        {...props}
        className={`!rounded-full h-10 !px-5 text-[#2f292a] font-medium !text-sm !box-border ${
          props.className || ''
        }`}
      />
    </div>
  );
};

export default UIInput;
