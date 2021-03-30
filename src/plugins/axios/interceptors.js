function setParametrs(config) {
  const params = config.params || {};
  config.params = Object.assign(params, {
    client_id: process.env.VUE_APP_GITHUB_CLIENT_ID,
    client_secret: process.env.VUE_APP_GITHUB_SECRET,
  });
  console.log(config);
  return config;
}

function cleanResponse(response) {
  return response.data;
}

export default function (axios) {
  axios.interceptors.request.use(setParametrs);
  axios.interceptors.response.use(cleanResponse);
}
