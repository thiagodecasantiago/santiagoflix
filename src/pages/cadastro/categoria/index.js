import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([initialValues]);

  const [category, setCategory] = useState(initialValues);

  function setValue(key, value) {
    setCategory({
      ...category,
      [key]: value,
    });
  }

  function handleOnChange({ target }) {
    setValue(target.getAttribute('name'), target.value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {category.name}</h1>
      <form
        onSubmit={function handleSubmit(event) {
          event.preventDefault();
          if (category.name.length !== 0 && !categories.includes(category)) {
            setCategories([...categories, category]);
          }

          setValue(initialValues);
        }}
      >
        <FormField
          label='Nome da categoria'
          type='text'
          id='catNameInput'
          name='name'
          placeholder='Escreva o nome da categoria'
          defaultValue={category.name}
          onChange={handleOnChange}
        />

        <FormField
          label='Descrição'
          type='textarea'
          id='catDescInput'
          name='description'
          placeholder='Escreva a descrição da categoria'
          defaultValue={category.description}
          onChange={handleOnChange}
        />

        <FormField
          label='Cor'
          type='color'
          id='catColorInput'
          name='color'
          defaultValue={category.color}
          onChange={handleOnChange}
        />
        <button>Cadastrar</button>
      </form>
      <br />
      Categorias Existentes:
      <ul>
        {categories.map((category, index) => {
          if (category.name.length === 0) return null;
          return <li key={`${category.name}${index}`}>{category.name}</li>;
        })}
      </ul>
      <Link to='/'>Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
