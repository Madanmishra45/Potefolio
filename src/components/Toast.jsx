import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

const Toast = ({ toasts, removeToast }) => {
  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className="toast-item" onClick={() => removeToast(toast.id)}>
          {toast.type === 'success' && <CheckCircle2 size={18} style={{ color: 'var(--accent-emerald)' }} />}
          {toast.type === 'info' && <Info size={18} style={{ color: 'var(--accent-cyan)' }} />}
          {toast.type === 'error' && <AlertCircle size={18} style={{ color: '#ef4444' }} />}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};

export default Toast;
