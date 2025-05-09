import { Select } from 'antd';
import type { SelectProps } from 'antd';
import '@styles/UISelector.css';

interface UISelectorProps extends SelectProps {
  label?: string;
}

const UISelector = ({ ...props }: UISelectorProps) => {
  return (
    <Select
      {...props}
      className={`custom-rounded-select !h-10  ${props.className || ''}`}
      dropdownStyle={{ fontWeight: 500 }}
    />
  );
};

export default UISelector;
