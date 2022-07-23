"use strict";

const average = (score1, score2, score3) => (score1 + score2 + score3) / 3;
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) console.log("dolphines win the trophy");
  else if (avgKoalas >= 2 * avgDolphins) console.log("koalas win the trophy");
  else console.log("no one wins");
};

const avgDolphins = average(44, 23, 71),
  avgKoalas = average(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);
