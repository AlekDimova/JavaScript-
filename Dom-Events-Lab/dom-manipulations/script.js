// DOM Query (get element)
const movieListElement = document.getElementById('movies');
const firstMovieElement = document.querySelector('.first-movie');

// Create Element
const secondMovieElement = document.createElement('li');
secondMovieElement.textContent = 'Man of Steel';

// Append new element to dom (morame da go zakacime za da se pojave)
movieListElement.appendChild(secondMovieElement);

// Append existing element to dom
setTimeout(() => {
    movieListElement.appendChild(firstMovieElement);
}, 2000);

// Clone existing element and prepend (go dobavq nai-otgore) (slicno kako append)
const firstMovieCloneElement = firstMovieElement.cloneNode(true);
firstMovieCloneElement.textContent = 'Passion of Christ';
movieListElement.prepend(firstMovieCloneElement);

// Append element on specific place before another child element
const thirdMovieElement = document.createElement('li');
thirdMovieElement.textContent = 'Lord of the Rings';

movieListElement.insertBefore(thirdMovieElement, secondMovieElement);

// Use before or after 
const fourthMovieElement = document.createElement('li');
fourthMovieElement.textContent = 'The Case for Christ';
thirdMovieElement.after(fourthMovieElement); // or .before
