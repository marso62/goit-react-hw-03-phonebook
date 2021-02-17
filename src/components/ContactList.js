import React from "react";

import style from "../style.module.css";

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <section>
      <ul className={style.contactList}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={style.contact}>
            <p className={style.textContacts}>{name}:</p>
            <p className={style.textContacts}>{number}</p>
            <button
              type="button"
              onClick={() => onRemoveContact(id)}
              className={style.buttonStyleList}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ContactList;
