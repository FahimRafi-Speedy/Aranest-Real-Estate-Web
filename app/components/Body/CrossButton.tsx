import React from 'react';
import { RxCross2 } from 'react-icons/rx';

interface CrossButtonProps {
  onClick: () => void;
  isVisible: boolean;
}

const CrossButton: React.FC<CrossButtonProps> = ({ onClick, isVisible }) => {
  return isVisible ? (
    <RxCross2
      onClick={onClick}
      className="text-3xl ml-4 cursor-pointer"
      title="Clear"
    />
  ) : null;
};

export default CrossButton;
