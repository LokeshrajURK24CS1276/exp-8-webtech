import { useState } from "react";
import FormField from "../components/FormField.jsx";

const initial = [
  { name: "Arun", regno: "URK24CS1201", course: "Portrait Editing", city: "Coimbatore" },
  { name: "Priya", regno: "URK24CS1214", course: "Color Grading", city: "Chennai" },
  { name: "Karthik", regno: "URK24CS1227", course: "Photo Restoration", city: "Madurai" }
];

function Students() {
  const [students, setStudents] = useState(initial);
  const [selected, setSelected] = useState(0);
  const student = students[selected];

  // every keystroke updates the selected student, so the profile and table change at once
  const update = (e) => {
    const copy = [...students];
    copy[selected] = { ...student, [e.target.name]: e.target.value };
    setStudents(copy);
  };

  return (
    <section className="page">
      <div className="two-col">
        <div className="panel">
          <h2>Edit Student</h2>
          {["name", "regno", "course", "city"].map((key) => (
            <FormField key={key} label={key.toUpperCase()}>
              <input name={key} value={student[key]} onChange={update} />
            </FormField>
          ))}
        </div>
        <div className="panel profile">
          <h2>{student.name || "No name"}</h2>
          <p>{student.name}'s Register Number is {student.regno}</p>
          <p>Course: {student.course}</p>
          <p>City: {student.city}</p>
        </div>
      </div>
      <table className="data-table">
        <tbody>
          {students.map((s, i) => (
            <tr key={i} className={i === selected ? "active" : ""} onClick={() => setSelected(i)}>
              <td>{s.name}</td><td>{s.regno}</td><td>{s.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Students;
