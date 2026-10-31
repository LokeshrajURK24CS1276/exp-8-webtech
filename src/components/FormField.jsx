// Reusable label + input + error message for every form
function FormField({ label, error, children }) {
  return (
    <div className={error ? "form-field has-error" : "form-field"}>
      <label>{label}</label>
      {children}
      {error && <small>{error}</small>}
    </div>
  );
}

export default FormField;
