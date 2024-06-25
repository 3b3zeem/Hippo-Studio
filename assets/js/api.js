'use strict';

const api_key = 'fa07e39104e769e58916910a20a647c9';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

/*** Fetch data ***/
const fetchDataFromServer = function(url, callback, 
optionalParam){
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
}

export{ imageBaseURL, api_key, fetchDataFromServer};