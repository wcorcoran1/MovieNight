const client = require("./client");

async function createMovies({ title, description, rating}) {
  try {
    const {
      rows: [movie],
    } = await client.query(
      `
      INSERT INTO movies(title, description, rating)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
      `,
      [title, description, rating]
      );
      return movie;
  } catch (error) {
    throw error;
  }
}

async function getAllMovies() {
  try {
    const { rows: [movie] } = await client.query(`
                SELECT *
                FROM movies
              `);

    return movie;
  } catch (error) {
    throw error;
  }
}

async function getMoviesById(id) {
  try {
    const {
      rows: [movie],
    } = await client.query(
      `
            SELECT *
            FROM games
            WHERE id=${id}
            `
    );
    return movie;
  } catch (error) {
    throw error;
  }
}


module.exports = { createMovies, getAllMovies, getMoviesById};