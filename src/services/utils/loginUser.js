import apiService from '../ApiService';
const { Magic } = require('magic-sdk');

let magic = new Magic(process.env.REACT_APP_PUBLIC_KEY);
let timer = null;

export default async function login(email) {
  localStorage.clear();
  const user = await magic.auth.loginWithMagicLink({
    email,
  });
  timer = setInterval(getToken(email), 1000);
}

async function writeToLocal(token, did) {
  console.log(token, did);
  localStorage.setItem(
    'user',
    JSON.stringify({
      token,
      did,
      expiry: new Date().getTime() + 1000 * 7200 * 3,
    })
  );
  window.location.href = '/orders';
}

async function getToken(email) {
  let token = await magic.user.getIdToken({ lifespan: 7200 });
  console.log(token, email);
  if (token) {
    let response = await apiService.loginUser(token, email);
    console.log(response);
    let hasuraToken = response.token;
    let did = response.customerId;
    clearInterval(timer);
    await writeToLocal(hasuraToken, did);
  }
}
