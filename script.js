const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', "");
const personalMovieDB = {
    privat: false,
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
};




for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');


    if (a != null && b != null && a != '' && b != '' && String.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Сделано')
    } else {
        i--;
    }
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}