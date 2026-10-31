import React, { useState } from "react";
import FormField from "../components/FormField.jsx";

const emptyForm = {
  name: "",
  email: "",
  password: "",
  age: "",
  mobile: "",
  gender: "",
  state: ""
};

// returns an error message for every invalid field
function validate(form) {
  const errors = {};

  if (form.name.trim() === "") errors.name = "Full name is required.";
  else if (!/^[A-Za-z ]+$/.test(form.name.trim())) errors.name = "Name must contain letters and spaces only.";

  if (form.email === "") errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email address.";

  if (form.password === "") errors.password = "Password is required.";
  else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password))
    errors.password = "Use uppercase, lowercase, a number and at least 8 characters.";

  if (form.age === "") errors.age = "Age is required.";
  else if (!/^\d+$/.test(form.age) || Number(form.age) < 18 || Number(form.age) > 30)
    errors.age = "Age must be between 18 and 30.";

  if (form.mobile === "") errors.mobile = "Mobile number is required.";
  else if (!/^\d{10}$/.test(form.mobile)) errors.mobile = "Enter exactly 10 digits.";

  if (form.gender === "") errors.gender = "Please select your gender.";
  if (form.state === "") errors.state = "Please select your state.";

  return errors;
}

function Register() {
  const [form, setForm] = useState(emptyForm);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const errors = validate(form);
  const valid = Object.keys(errors).length === 0;
  const validCount = 7 - Object.keys(errors).length;

  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  // a field shows its error once the user has visited it
  const markTouched = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
  };

  const showError = (name) => (touched[name] || form[name] !== "" ? errors[name] : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid) setSubmitted(true);
  };

  const handleReset = () => {
    setForm(emptyForm);
    setTouched({});
    setSubmitted(false);
  };

  return (
    <section className="page">
      <h2 className="page-title">Client Registration</h2>
      <p className="page-sub">Create your LensArt account to book editing sessions</p>

      <div className="form-card">
        <form onSubmit={handleSubmit} noValidate>
          <FormField label="Full Name" name="name" error={showError("name")}>
            <input id="name" name="name" value={form.name} onChange={updateField} onBlur={markTouched} placeholder="Enter your name" />
          </FormField>

          <FormField label="Email Address" name="email" error={showError("email")}>
            <input id="email" name="email" type="email" value={form.email} onChange={updateField} onBlur={markTouched} placeholder="Enter your email" />
          </FormField>

          <FormField label="Password" name="password" error={showError("password")}>
            <input id="password" name="password" type="password" value={form.password} onChange={updateField} onBlur={markTouched} placeholder="Minimum 8 characters" />
          </FormField>

          <div className="form-row">
            <FormField label="Age" name="age" error={showError("age")}>
              <input id="age" name="age" type="number" value={form.age} onChange={updateField} onBlur={markTouched} placeholder="18 - 30" />
            </FormField>

            <FormField label="Mobile Number" name="mobile" error={showError("mobile")}>
              <input id="mobile" name="mobile" type="tel" value={form.mobile} onChange={updateField} onBlur={markTouched} placeholder="10-digit number" />
            </FormField>
          </div>

          <div className="form-row">
            <FormField label="Gender" name="gender" error={showError("gender")}>
              <select id="gender" name="gender" value={form.gender} onChange={updateField} onBlur={markTouched}>
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </FormField>

            <FormField label="State" name="state" error={showError("state")}>
              <select id="state" name="state" value={form.state} onChange={updateField} onBlur={markTouched}>
                <option value="">Select state</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
              </select>
            </FormField>
          </div>

          <p className="progress">{validCount} of 7 fields valid</p>

          <div className="form-actions">
            <button type="submit" disabled={!valid}>Submit Registration</button>
            <button type="button" className="button-outline" onClick={handleReset}>Clear</button>
          </div>

          {submitted && (
            <p className="success">
              Registration completed successfully! Welcome to LensArt, {form.name.trim()}.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Register;
