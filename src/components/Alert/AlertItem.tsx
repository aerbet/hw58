import React from 'react';
import Alert from './Alert';

interface AlertItemProps {
  id: number;
  type: 'primary' | 'success' | 'danger' | 'warning';
  message: string;
  onDismiss: (id: number) => void;
}

const AlertItem: React.FC<AlertItemProps> = ({ id, type, message, onDismiss }) => {
  return (
    <Alert id={id} type={type} onDismiss={onDismiss}>
      {message}
    </Alert>
  );
};

export default AlertItem;