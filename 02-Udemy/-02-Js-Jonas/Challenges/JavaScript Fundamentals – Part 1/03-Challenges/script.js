const dolphinsScore = (96 + 108 + 89) / 3;
const koalasScoree = (88 + 91 + 110) / 3;

if (dolphinsScore > koalasScoree && dolphinsScore >= 100) {
  console.log(`dolphins wins the trophy`);
} else if (koalasScoree > dolphinsScore && koalasScoree >= 100) {
  console.log(`koalas wins the trophy`);
} else if (
  dolphinsScore === koalasScoree &&
  koalasScoree >= 100 &&
  dolphinsScore >= 100
) {
  console.log(`it is a draw`);
} else {
  console.log(`No one wins the trophy`);
}
