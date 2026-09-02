import { useEffect, useState } from "react";
import { useContacts } from "./ContactContext";

function ContactForm({ editingContact, setEditingContact }) {
  const { dispatch } = useContacts();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setEmail(editingContact.email);
      setPhone(editingContact.phone);
    } else {
      setName("");
      setEmail("");
      setPhone("");
    }
  }, [editingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      return;
    }

    if (editingContact) {
      dispatch({
        type: "edit",
        contact: {
          id: editingContact.id,
          name: name,
          email: email,
          phone: phone,
          favorite: editingContact.favorite,
        },
      });

      setEditingContact(null);
    } else {
      dispatch({
        type: "add",
        contact: {
          name: name,
          email: email,
          phone: phone,
        },
      });
    }

    setName("");
    setEmail("");
    setPhone("");
  };

  const handleCancel = () => {
    setEditingContact(null);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div>
      <h2>{editingContact ? "Edit Contact" : "Add New Contact"}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Phone:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="submit">{editingContact ? "Update" : "Add"}</button>

        {editingContact && (
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default ContactForm;
