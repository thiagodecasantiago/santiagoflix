import { useState } from 'react';

function useForm(initialValues, validate) {
  // const [touched, setTouchedFields] = useState({});
  // const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange({ target }) {
    setValue(target.getAttribute('name'), target.value);
  }

  // function handleBlur({ target }) {
  //   const fieldName = target.getAttribute('name');
  //   console.log(target);
  //   setTouchedFields({
  //     ...touched,
  //     [fieldName]: true,
  //   });
  //   console.log(touched);
  // }

  function clearForm() {
    setValues(initialValues);
  }

  // function validateValues(values) {
  //   const errors = validate(values);
  //   setErrors(errors);
  //   return errors;
  // }

  return {
    // errors,
    // touched,
    values,
    clearForm,
    // handleBlur,
    handleChange,
    // validateValues,
  };
}

export default useForm;
