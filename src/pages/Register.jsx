import { useState } from "react";
import FormField from "../components/FormField.jsx";

// each field: label, input type and a check that returns an error message or ""
const fields = [
  { name: "name", label: "Full Name", type: "text",
    check: (v) => (/^[A-Za-z ]+$/.test(v.trim()) ? "" : "Name must contain letters and spaces only.") },
  { name: "email", label: "Email Address", type: "email",
    check: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address.") },
  { name: "password", label: "Password", type: "password",
    check: (v) => (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(v) ? "" : "Use uppercase, lowercase, a number and 8+ characters.") },
  { name: "age", label: "Age", type: "number",
    check: (v) => (v >= 18 && v <= 30 ? "" : "Age must be between 18 and 30.") },
  { name: "mobile", label: "Mobile Number", type: "tel",
    check: (v) => (/^\d{10}$/.test(v) ? "" : "Enter exactly 10 digits.") },
  { name: "gender", label: "Gender", options: ["Male", "Female", "Other"] },
  { name: "state", label: "State", options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"] }
];

function Register() {
  const [form, setForm] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errorOf = (f) => {
    const value = form[f.name] || "";
    if (value === "") return f.label + " is required.";
    return f.check ? f.check(value) : "";
  };
  const valid = fields.every((f) => errorOf(f) === "");

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setTouched({ ...touched, [e.target.name]: true });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) setSubmitted(true);
  };

  return (
    <section className="page">
      <form className="form-card" onSubmit={handleSubmit} noValidate>
        <h2>Client Registration</h2>
        {fields.map((f) => (
          <FormField key={f.name} label={f.label} error={touched[f.name] ? errorOf(f) : ""}>
            {f.options ? (
              <select name={f.name} value={form[f.name] || ""} onChange={update} onBlur={update}>
                <option value="">Select {f.label.toLowerCase()}</option>
                {f.options.map((o) => <option key={o}>{o}</option>)}
              </select>
            ) : (
              <input name={f.name} type={f.type} value={form[f.name] || ""} onChange={update} onBlur={update} />
            )}
          </FormField>
        ))}
        <button type="submit" disabled={!valid}>Submit Registration</button>
        {submitted && <p className="success">Registration completed successfully! Welcome, {form.name}.</p>}
      </form>
    </section>
  );
}

export default Register;
