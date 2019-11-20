import React from "react";

const InputField = ({ handleChange, labelValue, name, placeholder, value }) => (
  <section>
    <label>
      {labelValue}:{" "}
      <input
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        type="text"
        value={value}
      />
    </label>
  </section>
);

export default InputField;
