import React, { useState, useEffect } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import { retrieveData } from '../../data/APICommunication.js';

function Home() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    retrieveData('/db').then((res) => {
      if (res.length !== 0) {
        setDados(res);
      }
      return;
    });
  }, []);

  return (
    <div style={{ background: '#141414' }}>
      <PageDefault showNewVideoButton>
        {dados.length === 0 && <div>Carregando dados de vídeo...</div>}
        {dados.length !== 0 && (
          <BannerMain
            videoTitle={dados.categories[0].videos[0].titulo}
            url={dados.categories[0].videos[0].url}
            videoDescription={dados.categories[0].videos[0].description}
          />
        )}

        {dados.length === 0 && <div>Carregando dados do catálogo...</div>}
        {dados.length !== 0 &&
          dados.categories.map((category, index) => {
            const ignoreFirstVideo = index === 0 ? true : false;

            return (
              <Carousel
                ignoreFirstVideo={ignoreFirstVideo}
                category={category}
              />
            );
          })}
      </PageDefault>
    </div>
  );
}

export default Home;
