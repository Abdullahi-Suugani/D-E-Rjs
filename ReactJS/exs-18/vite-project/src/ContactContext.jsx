import { createContext, useContext, useReducer } from "react";

const ContactContext = createContext();

const initialState = [];

function contactReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          name: action.contact.name,
          email: action.contact.email,
          phone: action.contact.phone,
          favorite: false,
        },
      ];

    case "edit":
      return state.map((contact) =>
        contact.id === action.contact.id ? action.contact : contact,
      );

    case "delete":
      return state.filter((contact) => contact.id !== action.id);

    case "toggleFavorite":
      return state.map((contact) =>
        contact.id === action.id
          ? {
              ...contact,
              favorite: !contact.favorite,
            }
          : contact,
      );

    default:
      return state;
  }
}

export function ContactProvider({ children }) {
  const [contacts, dispatch] = useReducer(contactReducer, initialState);

  return (
    <ContactContext.Provider value={{ contacts, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContacts() {
  return useContext(ContactContext);
}
