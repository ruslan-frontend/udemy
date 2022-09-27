"use strict"

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {}, 
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 12);
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', 12);
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = +prompt('На сколько оцените его?', '');
  
      if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
      personalMovieDB.movies[a] = b;
        console.log('Done!');
      } else {
          console.log('Error!');
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (10 <= personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  showMyDB: function() {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    } else {
      console.log('Запрещено параметрами приватности');
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр по номером ${i}`);

      if (genre == '' || genre === null) {
        console.log('Вы ввели некорректные данные или нажали отмена');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre; //! i-1 - Чтобы массив начинался с первой позиции
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр №${i + 1} - это ${item}`);
    });
  }
};