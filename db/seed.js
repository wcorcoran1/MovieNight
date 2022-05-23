const client = require("./client");
const { User, Genre, Movie } = require("./index")
const { users, genre, movies } = require("./seedData");
const { getGenreById, getAllGenres } = require("./genres");
const { getAllMovies } = require("./movies");

const dropTables = async () => {
  console.log("----Dropping tables----");
  await client.query(`
        DROP TABLE IF EXISTS movies;
        DROP TABLE IF EXISTS genres;
        DROP TABLE IF EXISTS users;
    `);
  console.log("----Tables dropped----");
};

const createTables = async () => {
  console.log("---Building Tables----");
  try {
    
    await client.query(`
          CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email TEXT NOT NULL,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
          );

          CREATE TABLE genres (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL
          );

         CREATE TABLE movies (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          rating VARCHAR(255) NOT NULL,
         );
         CREATE TABLE movie_genre (
             id SERIAL PRIMARY KEY,
             "movieId" INTEGER REFERENCES movies(id),
             "genreId" INTEGER REFERENCES genre(id)
         );
      `);
    console.log("-----TABLES BUILT-----");
  } catch (error) {
    throw error;
  }
};

const seedDb = async () => {
  console.log("Creating Users...");
  const createdUsers = await Promise.all(users.map(User.createUser));
  console.log("Users:", createdUsers);

  console.log("Creating genres.....");
  const createGenres = await Promise.all(genre.map(Genre.createGenre));
  console.log("Genres", createGenres);

  console.log("Creating Movies...");
   const createMovie = await Promise.all(movies.map((movie) => Movie.createMovies(movie)));
  console.log("Movies", createMovie);
};

async function testDb(){
  try{
console.log("getAllMovies")
const findMovie = await getAllMovies()
console.log(findMovie)
  }catch(error){
    throw error
  }
}

const initDb = async () => {
  try {
    await dropTables();
    await createTables();
    await seedDb();
    await testDb();
    console.log("DB is seeded and ready to go!!");
  } catch (error) {
    console.error(error);
  }
};

initDb().then(() => client.end());