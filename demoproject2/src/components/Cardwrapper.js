import Card from "./Card";
import React, { useEffect, useState } from "react";

export default function Cardwrapper(params) {
  const [People, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://65b0e037d16d31d11bdd7634.mockapi.io/cardsAPI/person").then(
      (res) =>
        res.json().then((data) => {
          console.log(data);
          setPeople(data);
        })
    );
  }, []);

  return (
    <div class="Wrapper">
      {People.map((element) => {
        return (
          <Card
            name={element.name}
            title={element.jobtitle}
            imglink={element.avatar}
          ></Card>
        );
      })}
    </div>
  );
}
