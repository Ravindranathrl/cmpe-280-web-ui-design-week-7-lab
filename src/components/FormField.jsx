// Shared FormField with label, input, and error text
export default function FormField({ id, label, error, children }) {
  const describedBy = error ? `${id}-error` : undefined
  return (
    <div className="field">
      {label ? <label htmlFor={id}>{label}</label> : null}
      {children}
      <span id={describedBy} className="error-text">{error?.message}</span>
    </div>
  )
}


