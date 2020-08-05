import React, { useState, useEffect } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriesRepository from '../../repositories/categories';

function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesRepository
      .getAllWithVideos()
      .then((res) => {
        if (res.length !== 0) {
          setCategories(res);
        }
        return;
      })
      .catch(() => {
        const loadingDiv = document.getElementById('loadingDiv');
        loadingDiv.innerText = 'Desculpe, não foi possível carregar os dados.';
      });
  }, []);

  return (
    <div style={{ background: '#141414' }}>
      <PageDefault showNewVideoButton paddingAll={0}>
        {categories.length === 0 && (
          <div id='loadingDiv'>Carregando dados do catálogo...</div>
        )}
        {categories.length !== 0 && (
          <BannerMain
            videoTitle={categories[0].videos[0].titulo}
            url={categories[0].videos[0].url}
            videoDescription={categories[0].videos[0].description}
          />
        )}

        {categories.length !== 0 &&
          categories.map((category, index) => {
            const ignoreFirstVideo = index === 0 ? true : false;

            return (
              <Carousel
                ignoreFirstVideo={ignoreFirstVideo}
                key={category.id}
                category={category}
              />
            );
          })}
      </PageDefault>
    </div>
  );
}

export default Home;
