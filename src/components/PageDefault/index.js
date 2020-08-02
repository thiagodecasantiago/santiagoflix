import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import { Main } from './styles';

function PageDefault({ children, showNewVideo }) {
  return (
    <>
      {showNewVideo ? <Menu showNewVideo /> : <Menu />}
      <Main>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
