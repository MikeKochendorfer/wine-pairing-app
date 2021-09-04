import { getWinePairing } from "../../lib/getWinePairing";

export default async function winePairing(req, res) {
  // Get the food item passed in by the user's POST request
  const body = JSON.parse(req.body);
  const food = body.food; 

  // Get a wine pairing from spoonacular using user's input and our api key
  const apiKey = process.env.SPOONACULAR_API_KEY;
  const data = await getWinePairing(food, apiKey);

  res.status(200).json(data); //send back the data from spoonacular to the client
}
