"use strict"

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 12);
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {}, 
  genres: [],
  privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', 'marvel');
const b = +prompt('На сколько оцените его?', 3.7);
const c = prompt('Один из последних просмотренных фильмов?', 'logan');
const d = +prompt('На сколько оцените его?', 8.1);

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.movies);

/*
3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */