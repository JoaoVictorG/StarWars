import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/starships").then((result) => {
      setList(result.data.results);
      console.log(result.data.results);
    });
  }, []);

  return (
    <>
      <div>
        {list.map((item) => {
          return (
            <div key={item.url}>
              {/* <p>Numero: {item.url}</p> */}
              <p>Nome: {item.name}</p>
              <p>Modelo: {item.model}</p>
              <p>Fabricante: {item.manufacturer}</p>
              <p>Custo: {item.cost_in_credits}</p>
              <p>Comprimento: {item.length}</p>
              <p>{item.max_atmosphering_speed}</p>
              <p>{item.crew}</p>
              <p>{item.passengers}</p>
              <p>{item.cargo_capacity}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
