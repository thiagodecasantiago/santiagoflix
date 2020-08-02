import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';

function Home() {
  return (
    <div style={{ background: '#141414' }}>
      <PageDefault showNewVideo>
        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={
            'A primeira CORRIDA da Marbula 1! Neste final de semana, nossos corredores terão que dominar o circuito dos Savage Speeders, Savage Speedway!'
          }
        />

        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

        <Carousel category={dadosIniciais.categorias[1]} />

        <Carousel category={dadosIniciais.categorias[2]} />

        <Carousel category={dadosIniciais.categorias[3]} />

        <Carousel category={dadosIniciais.categorias[4]} />
      </PageDefault>
    </div>
  );
}

export default Home;
