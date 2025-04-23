import { Breadcrumb } from 'antd';
import { ReactNode } from 'react';

// Định nghĩa interface cho item trong breadcrumb
interface BreadcrumbItem {
  title: ReactNode;
  href?: string;
}

// Định nghĩa interface cho props của component
interface CustomBreadcrumbProps {
  items: BreadcrumbItem[];
}

const CustomBreadcrumb = ({ items }: CustomBreadcrumbProps) => {
  return (
    <Breadcrumb
      items={items.map((item, index) => {
        const isLast = index === items.length - 1;
        return {
          ...item,
          className: isLast
            ? 'text-black font-medium hover:text-blue-500'
            : 'text-gray-500 font-medium hover:text-blue-500',
          href: isLast ? undefined : item.href,
        };
      })}
    />
  );
};

export default CustomBreadcrumb;
