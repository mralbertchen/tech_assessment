const getMarketData = require("./market-data");
const dummyCoins = require("./dummy-coins");

module.exports = async ( id ) => {


  try {
    const portfolioCoins = dummyCoins(id);


    const portfolioValue = portfolioCoins.map(async coin => {
      return await getMarketData({ from: coin, to: "USD"}).USD;
    })


    const portfolio = [];

    for (let i=0;i<portfolioCoins.length;i++) {
      portfolio.push({
        "Coin": portfolioCoins[i],
        "Value": portfolioValue[i]
      });
    }

    return portfolio;
  } catch (e) {
    console.error(e);
    return Promise.reject(e.toString());
  }
};