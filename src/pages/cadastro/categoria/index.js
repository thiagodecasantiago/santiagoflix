import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/Form/FormField';
import FormButton from '../../../components/Form/FormButton';
import categoriesRepository from '../../../repositories/categories';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const initialValues = {
    title: '',
    description: '',
    color: '#000000',
  };
  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categories, setCategories] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    if (values.title.length !== 0 && !categories.includes(values)) {
      categoriesRepository.postNewCategory(values).then((res) => {
        if (res.ok) {
          updateCategories();
          clearForm();
        }
      });
    }
  }

  function updateCategories() {
    categoriesRepository.getAll().then((res) => {
      if (res.length !== 0) {
        setCategories(res);
      }
      return;
    });
  }

  useEffect(updateCategories, []);

  return (
    <PageDefault showNewVideoButton>
      <h1>Cadastro de Categoria: {values.title}</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label='Nome da categoria'
          type='text'
          id='catNameInput'
          name='title'
          placeholder='Escreva o nome da categoria'
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label='Descrição'
          type='textarea'
          id='catDescInput'
          name='description'
          placeholder='Escreva a descrição da categoria'
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label='Cor'
          type='color'
          id='catColorInput'
          name='color'
          value={values.color}
          onChange={handleChange}
        />
        <FormButton>Cadastrar</FormButton>
      </form>
      <h2>Categorias Existentes:</h2>
      {categories.length === 0 && <div>Carregando categorias...</div>}

      <ul style={{ listStyleType: ' none ' }}>
        {categories.map((category, index) => (
          <li
            style={{ color: `${category.color}` }}
            key={`${category.title}${index}`}
          >
            {category.title}
          </li>
        ))}
      </ul>
      <Link to='/'>Voltar para página inicial</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
