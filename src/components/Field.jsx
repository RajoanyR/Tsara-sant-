export function fieldProps(id, errors, hasHint = false) {
  const describedBy = [errors[id] ? `${id}-error` : null, hasHint ? `${id}-hint` : null].filter(Boolean).join(' ');
  return {
    id,
    name: id,
    'aria-invalid': errors[id] ? 'true' : 'false',
    'aria-describedby': describedBy || undefined,
  };
}

export function Field({ id, label, required = false, optional = false, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-deep">
        {label}
        {required && <span className="text-red-700" aria-hidden="true"> *</span>}
        {optional && <span className="font-normal text-muted"> (facultatif)</span>}
      </label>
      {children}
      {hint && <p id={`${id}-hint`} className="mt-1.5 text-xs text-muted">{hint}</p>}
      {error && <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-700">{error}</p>}
    </div>
  );
}
