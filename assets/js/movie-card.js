'use strict';

import { imageBaseURL } from "./api.js";

/**
 * movie card
 */
export function createMovieCard(movie){
    const{
        poster_path,
        title,
        vote_average,
        release_date,
        id
    } = movie;

    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
    <figure class="poster-box card-banner">
        <a href="./detail.html" title="${title}" class="card-btn" onclick="getMovieDetail(${id})">
            <img src="${imageBaseURL}w342${poster_path}" alt="${title}" 
            class="img-cover content-image" loading="lazy">
        </a>
        <div>
            <a href="./detail.html" onclick="getMovieDetail(${id})"> <i class="fa-brands fa-youtube icon"></i> </a>
        </div>
    </figure>

    <h4 class="title">${title}</h4>

    <div class="meta-list">
        <div class="meta-item">
            <img src="./assets/images/star.png" width="20" height="20" loading="lazy" alt="rating">
            <span class="span">${vote_average.toFixed(1)}</span>
        </div>

        <div class="card-badge">${release_date.split("-")[0]}</div>
    </div>
    `;

    return card;
}