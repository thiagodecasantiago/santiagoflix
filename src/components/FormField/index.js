import React from 'react';

function FormField({
  label,
  type,
  id,
  name,
  placeholder,
  defaultValue,
  onChange,
}) {
  if (type === 'textarea') {
    return (
      <div>
        <label htmlFor={id}>
          {label}:
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        </label>
      </div>
    );
  } else {
    return (
      <div>
        <label htmlFor={id}>
          {label}:
          <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
          />
        </label>
      </div>
    );
  }
}

export default FormField;
