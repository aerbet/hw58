import React from 'react';

type AlertType = 'primary' | 'success' | 'danger' | 'warning';

interface AlertProps extends React.PropsWithChildren{
  id: number;
  type: AlertType;
  onDismiss?: (id: number) => void;
}

const Alert: React.FC<AlertProps> = ({ id, type, onDismiss, children }) => {
  const getAlertClassName = () => {
    switch (type) {
      case 'primary':
        return 'alert-primary';
      case 'success':
        return 'alert-success';
      case 'danger':
        return 'alert-danger';
      case 'warning':
        return 'alert-warning';
      default:
        return 'alert-primary';
    }
  };

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss(id);
    }
  };

  return (
    <div className={`alert ${getAlertClassName()}`} role="alert">
      {children}
      {onDismiss && (
        <button type="button" className="close" onClick={handleDismiss} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
};

export default Alert;