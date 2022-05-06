import Cards from "./components/Cards";
import React from "react";

function App() {
  const [people, setPeople] = React.useState([]);
  const [favorite, setFavorite] = React.useState({
    ...people,
    isFavorite: false,
  });
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    fetch("https://swapi.dev/api/people/?format=json")
      .then((response) => response.json())
      .then((data) => setPeople(data.results))
      .catch((error) => console.log(error));

    // fetch("https://swapi.dev/api/people/?format=json")
  }, []);

  function handleFavorite(name) {
    setFavorite((prevFavorite) => !prevFavorite);
    // setFavorite((prevFavorite) => {
    //   return prevFavorite.map((favorite) => {
    //     return favorite.name === name
    //       ? { ...favorite, isFavorite: !favorite.isFavorite }
    //       : favorite;
    //   });
    // });

    // i tryied to do it using objects but it didn't work so i sticked to this broken favorite state button
  }
  //function handleFavorite(people) {
  // const newFavorite = [...favorite, people];
  // setFavorite(newFavorite);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="relative font-Roboto">
      <Cards
        key={people.edited}
        people={people}
        favorite={favorite}
        handleFavorite={handleFavorite}
        handleSearch={handleSearch}
        search={search}
      />
    </div>
  );
}

export default App;
