import axios from "axios";
import { useEffect, useState } from "react";

const Card = () => {
  const [list, setList] = useState([]);
  const [typeSearch, setTypeSearch] = useState(0);

  const getApi = (search) => {
    axios.get(`https://swapi.dev/api/${search}`).then((result) => {
      setList(result.data.results);
      console.log(result.data.results);
    });
  };

  //   const Foo = ({ typeSearch }) => {
  //     switch (typeSearch) {
  //       case 0:
  //         return (
  //           <div>
  //             <p>valor 1</p>
  //           </div>
  //         );
  //         break;
  //       case 1:
  //         return (
  //           <div>
  //             <p>valor 2</p>
  //           </div>
  //         );
  //         break;
  //       case 3:
  //         return (
  //           <div>
  //             <p>valor 3</p>
  //           </div>
  //         );
  //       default:
  //         return null;
  //     }
  //   };

  // useEffect(() => {
  // },[])

  return (
    <>
      <div>
        <button
          value="planets"
          onClick={(e) => {
            getApi(e.target.value);
            setTypeSearch(0);
          }}
        >
          Planetas
        </button>
        <button
          value="people"
          onClick={(e) => {
            getApi(e.target.value);
            setTypeSearch(1);
          }}
        >
          Pessoas
        </button>
        <button
          value="starships"
          onClick={(e) => {
            getApi(e.target.value);
            setTypeSearch(2);
          }}
        >
          Naves
        </button>
      </div>
      <div>
        {list.map((item) => {
          return (
            <div>
              <p>{item.name}</p>
              <p>{item.climate}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
