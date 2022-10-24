import axios from 'axios'
const url = "https://api.themoviedb.org/3/";
const api_key = "95161c2d4f265bc1dea3dcdd2ba31371"; // Api Key
export default {
	nowplayings () {
		return axios.get(`${url}movie/now_playing?api_key=${api_key}&language=ru-RU&page=1`); // сейчас
	},
	upcomings () {
		return axios.get(`${url}movie/upcoming?api_key=${api_key}&language=ru-RU&page=1`); // ожидание
	},
	populars () {
		return axios.get(`${url}movie/popular?api_key=${api_key}&language=ru-RU&page=1`) // популярярные
	},
	getmoviedetail (id) {
		return axios.get(`${url}movie/${id}?api_key=${api_key}&language=&language=ru-RU`); // информация о фильме
	},
	getMovieTrailer (id) {
		return axios.get(`${url}movie/${id}/videos?api_key=${api_key}&language=ru-RU`); // трейлер
	},
	getMovieCredits (id) {
		return axios.get(`${url}movie/${id}/credits?api_key=${api_key}&language=ru-RU`); // инфа про каст
	},
	getActors (id) {
		return axios.get(`${url}person/${id}?api_key=${api_key}&language=ru-RU`); // актёры
	},
	getActorsMovieBio (id) {
		return axios.get(`${url}person/${id}/movie_credits?api_key=${api_key}&language=ru-RU`); // Биография
	},
	search (id) {
		return axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${api_key}&language=ru-RU&query=${id}&page=1&include_adult=false`); // Поиск
	},
};