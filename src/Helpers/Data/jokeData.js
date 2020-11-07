import axios from 'axios';

const baseUrl = 'https://official-joke-api.appspot.com/random_joke';

const getJoke = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}`)
    .then((resp) => {
      resolve(resp.data);
    }).catch((error) => reject(error));
});
// eslint-disable-next-line
export default { getJoke };
