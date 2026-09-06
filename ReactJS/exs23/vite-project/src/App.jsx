import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    experience: "",
    skills: [],
    terms: false,
    notifications: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    setFormData({
      ...formData,
      [name]: name === "terms" || name === "notifications" ? checked : value,
    });
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value],
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.role) {
      newErrors.role = "Please select a role";
    }

    if (!formData.experience.trim()) {
      newErrors.experience = "Experience is required";
    }

    if (formData.skills.length === 0) {
      newErrors.skills = "Please select at least one skill";
    }

    if (!formData.terms) {
      newErrors.terms = "You must agree to the terms";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Application submitted successfully!");

      console.log(formData);
    }
  };

  return (
    <div className="container">
      <h2>Developer Application Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Full Name */}
        <label>Full Name</label>

        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />

        {errors.fullName && <p className="error">{errors.fullName}</p>}

        {/* Email */}
        <label>Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {errors.email && <p className="error">{errors.email}</p>}

        {/* Role */}
        <label>Role</label>

        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="">Select a role</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Full Stack Developer">Full Stack Developer</option>
          <option value="Software Engineer">Software Engineer</option>
        </select>

        {errors.role && <p className="error">{errors.role}</p>}

        {/* Experience */}
        <label>Years of Experience</label>

        <input
          type="number"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
        />

        {errors.experience && <p className="error">{errors.experience}</p>}

        {/* Skills */}
        <label>Skills</label>

        <div className="skills">
          <label>
            <input
              type="checkbox"
              value="React"
              checked={formData.skills.includes("React")}
              onChange={handleSkillChange}
            />
            React
          </label>

          <label>
            <input
              type="checkbox"
              value="JavaScript"
              checked={formData.skills.includes("JavaScript")}
              onChange={handleSkillChange}
            />
            JavaScript
          </label>

          <label>
            <input
              type="checkbox"
              value="TypeScript"
              checked={formData.skills.includes("TypeScript")}
              onChange={handleSkillChange}
            />
            TypeScript
          </label>

          <label>
            <input
              type="checkbox"
              value="Node.js"
              checked={formData.skills.includes("Node.js")}
              onChange={handleSkillChange}
            />
            Node.js
          </label>

          <label>
            <input
              type="checkbox"
              value="Python"
              checked={formData.skills.includes("Python")}
              onChange={handleSkillChange}
            />
            Python
          </label>

          <label>
            <input
              type="checkbox"
              value="Java"
              checked={formData.skills.includes("Java")}
              onChange={handleSkillChange}
            />
            Java
          </label>

          <label>
            <input
              type="checkbox"
              value="UI Design"
              checked={formData.skills.includes("UI Design")}
              onChange={handleSkillChange}
            />
            UI Design
          </label>

          <label>
            <input
              type="checkbox"
              value="API Development"
              checked={formData.skills.includes("API Development")}
              onChange={handleSkillChange}
            />
            API Development
          </label>
        </div>

        {errors.skills && <p className="error">{errors.skills}</p>}

        {/* Terms */}
        <label className="check">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>

        {errors.terms && <p className="error">{errors.terms}</p>}

        {/* Notifications */}
        <label className="check">
          <input
            type="checkbox"
            name="notifications"
            checked={formData.notifications}
            onChange={handleChange}
          />
          Receive notifications about new opportunities
        </label>

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default App;
