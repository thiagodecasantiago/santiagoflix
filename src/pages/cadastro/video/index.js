import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Video</h1>

      <Link to='/cadastro/categoria'>Cadastrar Categoria</Link>
      <br />
      <br />
      <br />
      <Link to='/'>Voltar para página inicial</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
