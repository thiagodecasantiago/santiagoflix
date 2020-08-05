import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import { Main } from './styles';

function PageDefault({ children, showNewVideoButton, paddingAll }) {
  return (
    <>
      <Menu showNewVideoButton={showNewVideoButton} />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}

export default PageDefault;
