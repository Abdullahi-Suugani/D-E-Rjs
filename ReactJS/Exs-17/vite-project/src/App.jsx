import { useState } from "react";

function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function resetForm() {
    setFormData(initialValues);
  }

  return {
    formData,
    handleChange,
    resetForm,
  };
}

function App() {
  const { formData, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Data :", formData);
    resetForm();
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Custom Hook</h1>

        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Message:
          <br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
