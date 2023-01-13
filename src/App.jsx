import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import DrinksCard from "./components/DrinksCard";
import { BiDrink } from "react-icons/bi";
import Message from "./components/Message";

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
        <form onSubmit={(e) => searchDrink(e)}>
          <input
            type="text"
            className="input-search"
            placeholder="   Buscar bebidas"
          />
          <button className="btn">
            <BiDrink className="icon" />
          </button>
        </form>
      </div>
      {drinksData ? <DrinksCard data={drinksData} /> : <Message/>}
    </div>
  );
}

export default App;
