'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import RegisterModal from './RegisterModal';
import RegisterDrawer from './RegisterDrawer';

interface IRegisterWrapperProps {
  open: boolean;
  onClose: () => void;
}

const RegisterWrapper: React.FC<IRegisterWrapperProps> = ({
  open,
  onClose,
}) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // lg breakpoint

  return isDesktop ? (
    <RegisterModal open={open} onClose={onClose} />
  ) : (
    <RegisterDrawer open={open} onClose={onClose} />
  );
};

export default RegisterWrapper;
