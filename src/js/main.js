'use strict'

const url = 'https://restcountries.eu/rest/v2/name/';

export default {



    fetchArticles(data) {
        return fetch(url + data).then(response => response.json());

    }

} 