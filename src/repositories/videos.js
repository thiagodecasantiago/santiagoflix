import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

async function getAll() {
  const response = await fetch(`${URL_VIDEOS}`);
  if (response.ok) {
    const resposta = await response.json();
    return resposta;
  }
  throw new Error('Não foi possível receber os dados');
}

async function postNewVideo(videoObj) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(videoObj),
  };

  const response = await fetch(`${URL_VIDEOS}`, options);
  if (response.ok) {
    return response;
  }
  throw new Error('Não foi possível enviar os dados');
}

export default {
  getAll,
  postNewVideo,
};
