import React from 'react';
interface ButtonProps {
    type?: 'basic' | 'raised' | 'stroked' | 'solid';
    color?: 'primary' | 'secondary' | 'neutral' | 'basic';
    ariaLabel?: string;
    isDisabled?: boolean;
    children: React.ReactNode;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;
export { Button, ButtonProps };
