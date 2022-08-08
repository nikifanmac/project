'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const movie1 = prompt('Один из последних просмотреных фильмов?', ''),
      movie1Reit = prompt('На сколько оцените его?', ''),
      movie2 = prompt('Один из последних просмотреных фильмов?', ''),
      movie2Reit = prompt('На сколько оцените его?', '');

personalMovieDB.movies[movie1] = movie1Reit;
personalMovieDB.movies[movie2] = movie2Reit;

console.log(personalMovieDB);
