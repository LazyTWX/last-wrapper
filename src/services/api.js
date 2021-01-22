const axios = require('axios');

const api = axios.create({
  baseURL: 'https://last-api.izrael0157.repl.co',
});

module.exports = api;