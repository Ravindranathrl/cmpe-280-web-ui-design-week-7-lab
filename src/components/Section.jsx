// Shared Section wrapper for consistent page layout
export default function Section({ title, children }) {
  return (
    <section className="section">
      {title ? <h2>{title}</h2> : null}
      {children}
    </section>
  )
}


