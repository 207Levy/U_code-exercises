# RESTful api - Movies & Actors

## 1. General Movie CRUD

- GET http://api.movieapp.com/movies HTTP/1.1
  response: HTTP/1.1 201 OK

  body: {

        movies: []
        }

- POST http://api.movieapp.com/movies HTTP/1.1

  {

        title: "Ocean's 11",
        plot: "casino robbery",
        poster: "image URL",
        budjet: 10000,
        revenue: 10000000,
        genres: ["Action", "Comedy"],
        popularity: 5,
        review: 5,
        runtime: 150

  }

  response: HTTP/1.1 201 OK

  Location: /movies/1
  body:
  {

        movieID: 1
        title: "Ocean's 11",
        plot: "casino robbery",
        poster: "image URL",
        budjet: 10000,
        revenue: 10000000,
        genres: ["Action", "Comedy"],
        popularity: 5,
        review: 5,
        runtime: 150

  }

- PUT http://api.movieapp.com/movies/1 HTTP/1.1

  {

        movieID: 1
        title: "Ocean's 11",
        plot: "casino robbery",
        poster: "image URL",
        budjet: 10000,
        revenue: 10000000,
        genres: ["Action", "Comedy"],
        popularity: 5,
        review: 10,
        runtime: 150

  }

  response: HTTP/1.1 200 OK

  body:
  {

        movieID: 1
        title: "Ocean's 11",
        plot: "casino robbery",
        poster: "image URL",
        budjet: 10000,
        revenue: 10000000,
        genres: ["Action", "Comedy"],
        popularity: 5,
        review: 10,
        runtime: 150

  }

- DELETE http://api.movieapp.com/movies/1 HTTP/1.1
  response: HTTP/1.1 204

## 2. General Actor CRUD

- GET http://api.movieapp.com/actors HTTP/1.1
  response:
  {

        actors: []

  }

- POST http://api.movieapp.com/actors HTTP/1.1

  {

        name: "Brad Pitt",
        bio: "William Bradley Pitt (born December 18, 1963) is…",
        birthday: "1963-12-18",
        deathday: null,
        gender: 2,
        popularity: 9.93

  }

  response: HTTP/1.1 201 Created

  Location: /actors/283

  {

        id: 283,
        name: "Brad Pitt",
        bio: "William Bradley Pitt (born December 18, 1963) is…",
        birthday: "1963-12-18",
        deathday: null,
        gender: 2,
        popularity: 9.93

  }

- DELETE http://api.movieapp.com/actors/283 HTTP/1.1
  response: HTTP/1.1 204
