export async function getWinePairing(food, apiKey) {
  const res = await fetch(
    `https://api.spoonacular.com/food/wine/pairing?food=${food}&apiKey=${apiKey}`
  ).then((res) => res.json());
  return res;
}
