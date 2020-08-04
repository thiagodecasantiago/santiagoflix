const baseURL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://santiagoflix.herokuapp.com';

export async function retrieveData(endpoint) {
  const fullURL = baseURL + endpoint;

  const response = await fetch(fullURL);
  if (response.ok) {
    const jsonData = await response.json();
    return jsonData;
  }
  throw new Error('Não foi possível receber os dados');
}

export async function sendData(endpoint, { title, color, description }) {
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
  const fullURL = baseURL + endpoint;

  const response = await fetch(fullURL, options);
  if (response.ok) {
    return response;
  }
  throw new Error('Não foi possível enviar os dados');
}
