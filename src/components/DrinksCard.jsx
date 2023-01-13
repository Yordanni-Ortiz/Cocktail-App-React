import React from "react";

const DrinksCard = ({ data }) => {
  return (
    <article>
      <div className="card-container">
        {data
        .sort((a, b) => {
          if (a.strDrink < b.strDrink){
            return -1
          }
          else if (b.strDrink < a.strDrink){
            return 1
          }
          else {
            return 0
          }
        })
        .map((info) => (
          <div key={info.idDrink}>
            <div className="card">
              <div>
                <img src={info.strDrinkThumb} alt="" />
              </div>
              <div className="text">
                <h3 className="name">{info.strDrink}</h3>
                <p>{info.strInstructions}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default DrinksCard;
