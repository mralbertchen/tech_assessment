module.exports = ( id ) => {
  switch (Number(id)) {
    case 1:
      return [ "BTC", "LTC", "ETH", "NEO", "EOS" ];
      break;
    case 2:
      return [ "BTC", "LTC", "ETH" ];
      break;
    case 3:
      return [ "BTC", "LTC", "ADA" ];
      break;
  }
};