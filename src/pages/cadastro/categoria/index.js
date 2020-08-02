import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>

      <form>
        <label for='CatInput'>
          Categoria:
          <input type='text' id='CatInput' placeholder='Escreva a categoria' />
        </label>
        <button formAction=''>Cadastrar</button>
      </form>

      <Link to='/'>Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
