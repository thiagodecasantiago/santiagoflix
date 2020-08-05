import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/Form/FormField';
import FormButton from '../../../components/Form/FormButton';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ title }) => title);
  // const validate = (values) => {
  //   const errors = {};
  //   if (!values.title) {
  //     errors.title = 'Campo obrigatório';
  //   }

  //   const youtubeRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/i;
  //   if (!values.url) {
  //     errors.url = 'Campo obrigatório';
  //   } else if (!youtubeRegex.test(values.url)) {
  //     errors.url = 'URL inválida';
  //   }

  //   if (!values.category) {
  //     errors.category = 'Campo obrigatório';
  //   } else if (!categoryTitles.includes(values.category)) {
  //     errors.category =
  //       'Categoria inválida. Escolha uma das categorias existentes ou cadastre uma nova categoria';
  //   }

  //   return errors;
  // };

  const {
    // errors,
    // touched,
    values,
    clearForm,
    handleChange,
    // handleBlur,
    // validateValues,
  } = useForm(
    {
      title: '',
      url: '',
      category: '',
    }
    // validate
  );

  useEffect(() => {
    categoriesRepository.getAll().then((categories) => {
      setCategories(categories);
    });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    // const err = validateValues(values);
    // const isErrorsEmpty = Object.keys(err).length === 0;
    // if (!isErrorsEmpty) return;

    const chosenCategory = categories.find((category) => {
      return category.title === values.category;
    });

    videosRepository
      .postNewVideo({
        title: values.title,
        url: values.url,
        categoryId: chosenCategory.id,
      })
      .then(() => {
        console.log('Video cadastrado com sucesso!');
        clearForm();
        history.push('/');
      });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label='Título'
          id='vidTitleInput'
          name='title'
          placeholder='Escreva o título do vídeo'
          value={values.title}
          // onBlur={handleBlur}
          onChange={handleChange}
        />
        {/* {touched.title && errors.title && (
          <span style={{ color: 'red' }} className='formField__error'>
            {errors.title}
          </span>
        )} */}

        <FormField
          label='URL do Youtube'
          id='vidURLInput'
          name='url'
          placeholder='Cole a URL completa do Youtube aqui'
          value={values.url}
          // onBlur={handleBlur}
          onChange={handleChange}
        />
        {/* {touched.url && errors.url && (
          <span className='formField__error'>{errors.url}</span>
        )} */}

        <FormField
          label='Categoria'
          id='vidCategoryInput'
          name='category'
          placeholder='Escreva a categoria do vídeo'
          value={values.category}
          // onBlur={handleBlur}
          onChange={handleChange}
          suggestions={categoryTitles}
        />
        {/* {touched.category && errors.category && (
          <span className='formField__error'>{errors.category}</span>
        )} */}

        <FormButton type='submit'>Cadastrar</FormButton>
      </form>
      <br />
      <br />
      <Link to='/cadastro/categoria'>Cadastrar Categoria</Link>
      <br />
      <br />
      <Link to='/'>Voltar para página inicial</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
