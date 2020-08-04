import React from 'react';
import { Link } from 'react-router-dom';
import Logo1 from '../../assets/img/Logo1.png';
// import Logo2 from "../../assets/img/Logo2.png";
import './Menu.css';
import Button from '../Button';

function Menu({ showNewVideoButton }) {
  return (
    <nav className='Menu'>
      <Link to='/'>
        <img className='Logo' src={Logo1} alt='Santiagoflix logo' />
      </Link>

      {showNewVideoButton && (
        <Button as={Link} className='ButtonLink' to='/cadastro/video'>
          Novo vídeo
        </Button>
      )}
    </nav>
  );
}

export default Menu;
