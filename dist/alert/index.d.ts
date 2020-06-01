import React from 'react';
export interface AlertProps {
    type?: 'success' | 'info' | 'warning' | 'error';
    showIcon?: boolean;
    title: string;
    subtitle?: string;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
