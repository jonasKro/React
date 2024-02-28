import Card from "./Card";
import React, { useEffect, useState } from "react";

export default function Cardwrapper(params) {
  const [People, setPeople] = useState([]);
  const [filteredpeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    fetch("https://65b0e037d16d31d11bdd7634.mockapi.io/cardsAPI/person").then(
      (res) =>
        res.json().then((data) => {
          console.log(data);
          setPeople(data);
          setFilteredPeople(data);
        })
    );
  }, []);

  const filterPeople = (filter) => {
    let filtered = People.filter((person) => person.name.includes(filter));
    setFilteredPeople(filtered);
  };

  return (
    <div>
      <input
        className="Input"
        placeholder="search"
        type="text"
        onChange={(el) => {
          console.log(el.target.value);
          filterPeople(el.target.value);
        }}
      ></input>
      <div class="Wrapper">
        {filteredpeople.map((element) => {
          return (
            <Card
              name={element.name}
              title={element.jobtitle}
              imglink={element.avatar}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}
