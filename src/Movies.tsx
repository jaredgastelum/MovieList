import { useState } from 'react';
import data from './MovieData.json';

const mds = data.MovieData;

function MovieList() {
  return (
    // THIS IS PRINTING THE MOVIE LIST
    <div style={{ margin: '20px' }}>
      <h3>Joel Hilton's Movie Collection</h3>

      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Title</th>
            <th scope="col">Year</th>
            <th scope="col">Director</th>
            <th scope="col">Rating</th>
            <th scope="col">Edited</th>
          </tr>
        </thead>

        <tbody>
          {mds.map((m) => (
            <tr>
              <td>{m.Category}</td>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;
