import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import DrinksCard from "./components/DrinksCard";
import Message from "./components/Message";
import coctel from "./data/img/coctel-con-rodaja-de-limon.png";

function App() {
  const [drinksData, setDrinksData] = useState([]);
  const [drink, setDrink] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .then((resp) => setDrinksData(resp.data.drinks))
      .catch((err) => console.err(err));
  }, [drink]);

  const searchDrink = (e) => {
    e.preventDefault();
    setDrink(e.target[0].value);
  };

  return (
    <div className="App">
      <div className="input-wrapper">
        <form className="form-input" onSubmit={(e) => searchDrink(e)}>
          <input
            type="text"
            className="input-search"
            placeholder="Buscar bebidas"
          />
          <button className="btn">
            <img src={coctel} className="btn-img" />
          </button>
        </form>
      </div>
      {drinksData ? <DrinksCard data={drinksData} /> : <Message />}
    </div>
  );
}

export default App;
