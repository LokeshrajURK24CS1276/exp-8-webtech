import React, { useState } from "react";
import FormField from "../components/FormField.jsx";

const courses = ["Portrait Editing", "Color Grading", "Photo Restoration", "Product Photography"];

const initialStudents = [
  { name: "Arun", regno: "URK24CS1201", course: "Portrait Editing", year: "2", city: "Coimbatore" },
  { name: "Priya", regno: "URK24CS1214", course: "Color Grading", year: "3", city: "Chennai" },
  { name: "Karthik", regno: "URK24CS1227", course: "Photo Restoration", year: "1", city: "Madurai" },
  { name: "Divya", regno: "URK24CS1239", course: "Product Photography", year: "2", city: "Kochi" }
];

function Students() {
  const [students, setStudents] = useState(initialStudents);
  const [selected, setSelected] = useState(0);

  const student = students[selected];

  // every keystroke updates the selected student in state
  const updateStudent = (e) => {
    const copy = [...students];
    copy[selected] = { ...student, [e.target.name]: e.target.value };
    setStudents(copy);
  };

  const addStudent = () => {
    setStudents([...students, { name: "New Student", regno: "", course: courses[0], year: "1", city: "" }]);
    setSelected(students.length);
  };

  return (
    <section className="page">
      <h2 className="page-title">Student Details</h2>
      <p className="page-sub">LensArt photography course &ndash; select a student and edit the details</p>

      <div className="two-col">
        <div className="panel">
          <h3>Edit Details</h3>
          <FormField label="Name" name="sname">
            <input id="sname" name="name" value={student.name} onChange={updateStudent} />
          </FormField>
          <FormField label="Register Number" name="sregno">
            <input id="sregno" name="regno" value={student.regno} onChange={updateStudent} />
          </FormField>
          <div className="form-row">
            <FormField label="Course" name="scourse">
              <select id="scourse" name="course" value={student.course} onChange={updateStudent}>
                {courses.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </FormField>
            <FormField label="Year" name="syear">
              <select id="syear" name="year" value={student.year} onChange={updateStudent}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </FormField>
          </div>
          <FormField label="City" name="scity">
            <input id="scity" name="city" value={student.city} onChange={updateStudent} />
          </FormField>
        </div>

        <div className="panel profile">
          <h3>Student Profile</h3>
          <div className="avatar">{student.name.trim().charAt(0).toUpperCase() || "?"}</div>
          <p className="profile-name">{student.name || "No name"}</p>
          <p className="profile-reg">{student.regno || "Register number not set"}</p>
          <table className="info-table">
            <tbody>
              <tr><th>Course</th><td>{student.course}</td></tr>
              <tr><th>Year</th><td>{student.year}</td></tr>
              <tr><th>City</th><td>{student.city || "-"}</td></tr>
            </tbody>
          </table>
          <p className="profile-line">
            {student.name}'s Register Number is {student.regno || "-"}
          </p>
        </div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h3>All Students ({students.length})</h3>
          <button type="button" className="small-btn" onClick={addStudent}>Add Student</button>
        </div>
        <table className="data-table">
          <thead>
            <tr><th>Name</th><th>Register No</th><th>Course</th><th>Year</th></tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i} className={i === selected ? "active" : ""} onClick={() => setSelected(i)}>
                <td>{s.name}</td>
                <td>{s.regno}</td>
                <td>{s.course}</td>
                <td>{s.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Students;
