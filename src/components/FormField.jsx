import React from "react";

// Reusable label + input/select + error message, used by the register and login forms
function FormField({ label, name, error, children }) {
  return (
    <div className={error ? "form-field has-error" : "form-field"}>
      <label htmlFor={name}>{label}</label>
      {children}
      {error && <small>{error}</small>}
    </div>
  );
}

export default FormField;
