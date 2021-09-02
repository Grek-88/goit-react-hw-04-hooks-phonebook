import React, { useState, useEffect } from "react";

import "./App.css";

import Section from "../Section/Section";
import InputContact from "../InputContact/InputContact";
import Contacts from "../Contacts/Contacts";

export default function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("contacts"))) {
      setContacts(JSON.parse(localStorage.getItem("contacts")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (dataForm) => {
    if (
      contacts.find(
        (el) => el.name.toLowerCase() === dataForm.name.toLowerCase()
      )
    ) {
      alert(`${dataForm.name} is already in contacts.`);
    } else {
      return setContacts((prevContacts) => [...prevContacts, dataForm]);
    }
  };

  const deleteContactList = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((el) => el.id !== contactId)
    );
  };

  return (
    <div className="App">
      <Section title="Phonebook">
        <InputContact onSubmit={formSubmitHandler} />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Contacts contact={contacts} onDelete={deleteContactList} />
        </Section>
      )}
    </div>
  );
}
