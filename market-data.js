const request = require('request-promise');


module.exports = async ({ from, to }) => {

  const opts = {
    uri:     `https://min-api.cryptocompare.com/data/price?fsym=${from}&tsyms=${to}`,
    method:  `GET`,
    json:    true
  };

  try {

    const res = await request(opts);
    return res;

  } catch (err) {
    Promise.reject(err);
  }


};
