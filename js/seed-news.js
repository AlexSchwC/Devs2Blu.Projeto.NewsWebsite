const API_KEY = 'pub_135506a07bbd4a500bd925229e7e88245b24f';
const GET_10_NEWS_URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=br&language=pt`;

const getNews = (url) => {
    fetch(url)
    .then(promise => {
        return promise.json();
    })
    .then((json) => {
        setJsonItem('news', json.results);
    })
}

// getNews(GET_10_NEWS_URL);

const insertFavoriteProp = () => {
    let news = getJsonItem('news');
    news.forEach(noticia => {
        noticia.isFavorite = false;
    })
    setJsonItem('news', news);
}

// insertFavoriteProp();