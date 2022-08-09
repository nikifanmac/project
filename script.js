'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотреных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != '' && b != '' && a != null && b != null && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('eror');
      i--;
    }
  }
}

rememberMyFilms();

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
  }
}

writeYourGenres();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Маловато');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Нормально так');
  } else if (personalMovieDB.count > 30) {
    console.log('Круто!');
  } else {
    console.log('Ошибочка');
  }
}

detectPersonalLevel();

function showMyDB() {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  }
}

showMyDB();
