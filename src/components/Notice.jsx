import { CheckCircle2, AlertCircle } from 'lucide-react';

export default function Notice({ type = 'success', children }) {
  const ok = type === 'success';
  const Icon = ok ? CheckCircle2 : AlertCircle;
  return (
    <div
      role={ok ? 'status' : 'alert'}
      className={`flex items-start gap-3 rounded-md border px-4 py-3 text-sm font-medium ${
        ok ? 'border-brand/30 bg-mint text-deep' : 'border-red-200 bg-red-50 text-red-800'
      }`}
    >
      <Icon size={20} className={`mt-0.5 shrink-0 ${ok ? 'text-brand' : 'text-red-700'}`} aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
