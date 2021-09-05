import useForm from "../lib/useForm";
import { useState } from "react";
import nProgress from "nprogress";
import WinePairing from "./WinePairing";
import styles from "../styles/SearchForm.module.css";

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
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="food">
          {/* <span>What do I pair with </span> */}
          <input
            className={styles.input}
            name="food"
            placeholder="Dish/Food Item"
            value={inputs.food}
            onChange={handleChange}
          />
          {/* <span> ?</span> */}
        </label>
        <button className={styles.button} type="submit">
          Search for Pairing
        </button>
      </form>
      <WinePairing winePairing={winePairing} />
    </>
  );
}
