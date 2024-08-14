import { useSelector } from "react-redux";

const Favorites = () => {
  const favoriteMovie = useSelector((state) => state.addFavorites);
  console.log(favoriteMovie);
  return (
    <>
      <div>FAVORITES</div>
      {favoriteMovie.map((video) => {
        return <p key={crypto.randomUUID()}>{video}</p>;
      })}
    </>
  );
};

export default Favorites;
