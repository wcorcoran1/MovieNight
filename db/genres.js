const client = require('./client')

const createGenre = async ({ name }) => {
    try {
      const {
        rows: [names],
      } = await client.query(
        `
          INSERT INTO genres (name)
          VALUES ($1)
          RETURNING *;
          `,
        [name]
      );
      return names;
    } catch (error) {
      throw error;
    }
  };

  const getAllGenres = async () => {
    try {
      const { rows } = await client.query(`
      SELECT *
      FROM genres;
      `);
       return rows
    } catch (error) {
      throw error;
    }
  };

  const getGenreById = async (id) => {
    try {
      const {
        rows: [genre],
      } = await client.query(
        `
                SELECT * FROM genres
                WHERE id=$1;
            `,
        [id]
      );

      return genre;
    } catch (error) {
      throw error;
    }
  };

  module.exports = { createGenre, getAllGenres, getGenreById, }