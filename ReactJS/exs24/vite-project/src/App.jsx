import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("");
  const [email, setEmail] = useState("");
  const [grade, setGrade] = useState("");
  const [subjects, setSubjects] = useState([]);

  const [errors, setErrors] = useState({});

  const handleSubjectChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSubjects([...subjects, value]);
    } else {
      setSubjects(subjects.filter((subject) => subject !== value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (studentName.trim().length < 2) {
      newErrors.studentName = "Name must be at least 2 characters";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!grade) {
      newErrors.grade = "Please select a grade";
    }

    if (subjects.length === 0) {
      newErrors.subjects = "Select at least one subject";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Registration successful!");

      console.log({
        studentName,
        email,
        grade,
        subjects,
      });
    }
  };

  return (
    <div className="container">
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
        <label>Student Name</label>

        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        {errors.studentName && <p className="error">{errors.studentName}</p>}

        <label>Email</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {errors.email && <p className="error">{errors.email}</p>}

        <label>Grade Level</label>

        <select value={grade} onChange={(e) => setGrade(e.target.value)}>
          <option value="">Select Grade</option>
          <option value="Grade 9">Grade 9</option>
          <option value="Grade 10">Grade 10</option>
          <option value="Grade 11">Grade 11</option>
          <option value="Grade 12">Grade 12</option>
        </select>

        {errors.grade && <p className="error">{errors.grade}</p>}

        <label>Subjects Interest</label>

        <div className="subjects">
          <label>
            <input
              type="checkbox"
              value="Mathematics"
              checked={subjects.includes("Mathematics")}
              onChange={handleSubjectChange}
            />
            Mathematics
          </label>

          <label>
            <input
              type="checkbox"
              value="Science"
              checked={subjects.includes("Science")}
              onChange={handleSubjectChange}
            />
            Science
          </label>

          <label>
            <input
              type="checkbox"
              value="English"
              checked={subjects.includes("English")}
              onChange={handleSubjectChange}
            />
            English
          </label>
        </div>

        {errors.subjects && <p className="error">{errors.subjects}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
