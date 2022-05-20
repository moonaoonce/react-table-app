import React from 'react'
import { gql, useMutation } from "@apollo/client"
import { EditableRow } from './EditableRow';

const CREATE_MOVIE = gql`
createMovies(input: $input) {
    movies {
      movieId
      title
      plot
    }
  }
}
`;

export const CreateMovies = (props) => {
    const { movies } = props;
    const [createMovies, {loading, error}] = useMutation(CREATE_MOVIE);

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
                                <EditableRow />
                                <button onClick={() => createMovies({variables: {where: {movieId: m.movieId, title: m.title, plot: m.plot}}})}>Add Movie</button>
                            </td>
                        </tr>
                        )
                    )}
                </tbody>
            </table>
        </div>
    );
}
