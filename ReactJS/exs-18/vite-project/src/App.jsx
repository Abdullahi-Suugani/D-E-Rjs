import { useState } from "react";
import { ContactProvider } from "./ContactContext";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

function App() {
  const [editingContact, setEditingContact] = useState(null);

  return (
    <ContactProvider>
      <h1>Contact Management App</h1>

      <ContactForm
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />

      <ContactList setEditingContact={setEditingContact} />
    </ContactProvider>
  );
}

export default App;
