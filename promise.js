const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (sum) => {
  const theaterIXX = await promiseTheaterIXX();
  const theaterVGC = await promiseTheaterVGC();

  const theater = theaterIXX.concat(theaterVGC);

  return theater.filter((item) => item.hasil === sum).length;
};

module.exports = {
  promiseOutput,
};
