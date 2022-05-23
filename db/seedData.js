const users = [
    {
      name: "Bill",
      email: "billsemail@mail.com",
      username: "Bill",
      password: 12345678,
    },
    {
      name: "Jane",
      email: "janesemail@mail.com",
      username: "Jane",
      password: 87654321,
    },
    {
      name: "Shelly",
      email: "shellysemail@mail.com",
      username: "Shelly",
      password: 24681012,
    },
  ];
  
  const genre = [
    { name: "Horror" },
    { name: "Action" },
    { name: "Comedy" },
    { name: "Romance" },
    { name: "Fantasy" },
  ];
  
  const movies = [
    {
      title: "Marvel's Avengers",
      description:
        "Captain America, Iron Man, Thor, Hulk, Black Widow, and Hawkeye must join forces to save the Earth from Loki",
      rating: "PG-13",
    },
    {
      title: "Step Brothers",
      description:
        "Will Ferrell and John C Really become stepbrothers in this classic comedy.",
      rating: "R",
    },
    {
      title: " A Nightmare on Elm Street",
      description:
        "A Wes Craven classic, four teens battle a killer that attacks them in their dreams.",
      rating: "R",
    },
    {
      title: "Lord of the Rings The Fellowship of the Ring",
      description:
        "Frodo starts his journey to destroy the ring of power with his friends.",
      rating: "PG-13",
    },
    {
      title: "Lord of the Rings The Two Towers",
      description:
        "The sequel to Fellowship of the Ring, Frodo and Sam continue on the journey to Mordor while Aragon defends the Realm of men",
      rating: "PG-13",
    },
    {
      title: "Lord of the Rings The Return of the King",
      description:
        "The epic conclusion of the trilogy, Frodo and Sam are at the final leg of their journey will they make it in time to save Middle Earth.Aragon accepts his destiny to be king with one final battle for Middle Earth.",
      rating: "PG-13",
    },
    {
      title: "Happy Gilmore",
      description: "Adam Sandler is a hockey player that starts playing golf.",
      rating: "PG-13",
    },
    {
      title: "Wedding Singer",
      description:
        "Adam Sandler is a wedding singer that falls in love with Drew Barrymore.",
      rating: "PG-13",
    },
    {
      title: "The Batman",
      description:
        "Robert Patterson plays the dark knight in his early in his career and must save Gotham from the Riddler.",
      rating: "PG-13",
    },
    {
      title: "Titanic",
      description:
        "A classic love story about rich girl falls in love with poor boy on madden voyage of the Titanic.",
      rating: "PG-13",
    },
    {
      title: "Captain America The first Avenger",
      description:
        "Steve Rogers becomes Captain America to defeat Red Skull during WWII.",
      rating: "PG-13",
    },
    {
      title: "Avenger's Endgame",
      description:
        "The Avengers work on bringing back all those they lost to Thanos.",
      rating: "PG-13",
    },
    {
      title: "The Shinning",
      description:
        "Jack Nicholson takes a job as a caretaker for the Overlook Hotel and brings his family with him. Based on the book by Stephen King",
      rating: "R",
    },
    {
      title: "Pet Sematary",
      description:
        "A man and his family moves to Maine, the death of a beloved pet leads the father to trust a local that tells him he can bring the pet back from the dead. Based on the book by Stephen King.",
      rating: "R",
    },
    {
      title: "Die Hard",
      description:
        "Bruce Willis must save a his wife from terrorists on Christmas Eve.",
      rating: "R",
    },
    {
      title: "Free Guy",
      description:
        "Ryan Reynolds plays a NPC in a video game that learns that he is in a video game.",
      rating: "Pg-13",
    }
  ];
  
  const movie_genre = [
    {movieId:1, genreId:2},
    {movieId:2, genreId:3},
    {movieId:3, genreId:1},
    {movieId:4, genreId:5},
    {movieId:5, genreId:5},
    {movieId:6, genreId:5},
    {movieId:7, genreId:3},
    {movieId:8, genreId:4},
    {movieId:8, genreId:3},
    {movieId:9, genreId:2},
    {movieId:10, genreId:4},
    {movieId:11, genreId:2},
    {movieId:12, genreId:2},
    {movieId:13, genreId:1},
    {movieId:14, genreId:1},
    {movieId:15, genreId:2},
    {movieId:16, genreId:3},
  ]
  module.exports = { users, genre, movies };