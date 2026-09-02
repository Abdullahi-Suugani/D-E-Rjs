import { useContacts } from "./ContactContext";

function ContactList({ setEditingContact }) {
  const { contacts, dispatch } = useContacts();

  const handleFavorite = (id) => {
    dispatch({
      type: "toggleFavorite",
      id: id,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      id: id,
    });
  };

  return (
    <div>
      <h2>Contacts</h2>

      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <h3>
                {contact.favorite && "⭐ "}
                {contact.name}
              </h3>

              <p>Email: {contact.email}</p>

              <p>Phone: {contact.phone}</p>

              <button onClick={() => handleFavorite(contact.id)}>
                {contact.favorite ? "Unfavorite" : "Favorite"}
              </button>

              <button onClick={() => setEditingContact(contact)}>Edit</button>

              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
