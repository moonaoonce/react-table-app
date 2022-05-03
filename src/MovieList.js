import { useMutation, gql } from "@apollo/client";

const MUTATION_MOVIE = gql`
mutation DeleteMovies($where: MovieWhere) {
    deleteMovies(where: $where) {
      bookmark
    }
  }
`;

function MovieList(props) {
    const { movies } = props;
    const [deleteMovies, {error, loading}] = useMutation(MUTATION_MOVIE);

    if (loading) return <div>Delete Movie</div>
    if (error) return <div>Delete error ${error.message}</div>

    return (
        <div>
            <table>
                <tbody>
                    {movies.map((m, i) => (
                        <tr key={i}>
                            <td>{m.movieId}</td>
                            <td>{m.title}</td>
                            <td>{m.plot}</td>
                            <td>
                                <button onClick={() => deleteMovies({variables: {where: {movieId: m.movieId}}})}>Delete</button>
                            </td>
                        </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default MovieList;