const api = require('../services/api');

module.exports = class Last {
  constructor(token) {
    this.token = token;
  }

  static async getBot(id) {
    if(!id) throw new Error('Last - You need to enter the id.');

    const response = await api.get('/bot/' + id);
    if(response.status === 404) {
      throw new Error('Last - 404 Bot not found');
    }

    return response.data;
  }
}