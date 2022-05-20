import React from "react";
import "./App.css"
import { gql, useQuery } from "@apollo/client"
import MovieList from "./MovieList";
import { CreateMovies } from "./CreateMovies";

const MOVIE = gql`
  query Movie($movieId: ID) {
      movies(where: { movieId: $movieId }) {
          movieId
          title
          plot
      }
  }
`;

function App() {
  const { loading, error, data } = useQuery(MOVIE);

  if (error) return <p>Error ${error.message}</p>
  if (loading) return <p>Loading...</p>
  
  return (
    <div className="app-container">
      <h1>Movie React Table</h1>
      <CreateMovies />
      <table>
        <thead>
          <tr>
            <th>Movie Id</th>
            <th>Name</th>
            <th>Plot</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
      <MovieList movies={data.movies} />
    </div>
  );
}

export default App;