import { useGetMoviesQuery } from "../../redux/apiGetMovies";

const ListMovies = () => {
  const { data: tasks, error, isLoading } = useGetMoviesQuery();

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
        {(tasks.length === 0 || undefined) && ""}
        {tasks.map((item) => {
          <div>{item.etag}</div>;
        })}
      </div>
    </>
  );
};

export default ListMovies;
