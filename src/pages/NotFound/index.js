import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';

const PageTitle = styled.h1`
  text-align: center;
`;

function NotFound() {
  return (
    <PageDefault>
      <PageTitle>Página não encontrada</PageTitle>

      <Link to='/'>Ir para home</Link>
    </PageDefault>
  );
}

export default NotFound;
