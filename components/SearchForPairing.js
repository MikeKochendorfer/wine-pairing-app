import useForm from "../lib/useForm";
import { useState } from "react";
import nProgress from "nprogress";
import WinePairing from "./WinePairing";

export default function SearchForPairing() {
  const { inputs, handleChange } = useForm({
    food: "",
  });

  const [winePairing, setWinePairing] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    nProgress.start();
    if (inputs.food != "") {
      let request = await fetch("api/wine-pairing", {
        method: "post",
        body: JSON.stringify(inputs),
      }).then((data) => data);
      const result = await request.json();
      setWinePairing(result);
      nProgress.done(true);
      return result;
    }
    nProgress.remove();
  }

  return (
    <>
      <h1>🥂 🍷 Wine Pairing 🍷 🥂</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="food">
          <span>What do I pair with </span>
          <input
            name="food"
            placeholder="dish/food item"
            value={inputs.food}
            onChange={handleChange}
          />
          <span> ?</span>
        </label>
      </form>
      <WinePairing winePairing={winePairing} />
    </>
  );
}
