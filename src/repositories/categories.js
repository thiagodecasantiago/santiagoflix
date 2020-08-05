import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;

async function getAll(path = '') {
  const response = await fetch(`${URL_CATEGORIES}${path}`);
  if (response.ok) {
    const resposta = await response.json();
    return resposta;
  } else throw new Error('Não foi possível receber os dados');
}

async function getAllWithVideos() {
  return getAll('?_embed=videos');
}

async function postNewCategory({ title, color, description }) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      color,
      link_extra: {
        description,
      },
    }),
  };

  const response = await fetch(`${URL_CATEGORIES}`, options);
  if (response.ok) {
    return response;
  } else throw new Error('Não foi possível enviar os dados');
}

export default {
  getAllWithVideos,
  getAll,
  postNewCategory,
};
