import React from "react";

import style from "../style.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <p className={style.textContacts}>Find contacts by name</p>
      <input
        type="tex"
        value={value}
        onChange={({ target }) => onChange(target.value)}
      />
    </div>
  );
};

export default Filter;
