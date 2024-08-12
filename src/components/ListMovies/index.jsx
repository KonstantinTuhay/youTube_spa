import { useGetMoviesQuery } from "../../redux/apiMovies";
import { useSelector } from "react-redux";

const ListMovies = () => {
  const text = useSelector((state) => state.getSlice);

  const { data: tasks, error, isLoading } = useGetMoviesQuery(text);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // console.log(Array.isArray(tasks));
  console.log(tasks);

  return (
    <>
      <div>
        {/* {(tasks.length === 0 || undefined) && ""}
        {tasks.map((task) => {
          <div>{task.kind}</div>;
        })} */}
      </div>
    </>
  );
};

export default ListMovies;
