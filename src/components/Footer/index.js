import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Orgulhosamente criado por{' '}
        <a href='https://github.com/thiagodecasantiago'>Thiago Santiago</a>{' '}
        durante a{' '}
        <a href='https://www.alura.com.br/imersao-react'>Imersão React</a> da{' '}
        <a href='https://www.alura.com.br/'>Alura.</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
