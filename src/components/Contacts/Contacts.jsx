/* eslint-disable array-callback-return */
import React, { useState } from "react";
import s from "../Contacts/Contacts.module.css";

import FindContact from "../FindContact/FindContact";

export default function Contacts(props) {
  const [filter, setFilter] = useState("");

  const filterContact = (filterContact) => setFilter(filterContact);

  return (
    <>
      <FindContact onChange={filterContact} />
      <ul>
        {props.contact.map((el) => {
          if (filter) {
            if (el.name.toLowerCase().includes(filter)) {
              return (
                <li key={el.id} className={s.li}>
                  {el.name} {el.number}
                  <button
                    className={s.button}
                    onClick={() => props.onDelete(el.id)}
                  >
                    Delete
                  </button>
                </li>
              );
            }
          } else {
            return (
              <li key={el.id} className={s.li}>
                {el.name} {el.number}
                <button
                  className={s.button}
                  onClick={() => props.onDelete(el.id)}
                >
                  Delete
                </button>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
}
