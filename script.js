console.log('it works');

// code your solution in here

// Grabbing elements
const postList = document.querySelector('#post-list')
const form = document.getElementsByTagName('form');
const title = document.querySelector('#new-post-title');
const content = document.querySelector('#new-post-content');
const submit = document.getElementById('submit-form');
const post = document.querySelector('#post-list');
const span = document.querySelector('span');
const hobbies = document.querySelector('#hobbies-tag');
const schoolLife = document.querySelector('#school-life-tag');
const personal = document.querySelector('#personal-tag');
const formGroup = document.querySelector('.form-group');

// Adding new elements
const card = document.createElement('div');
const newCardBody = document.createElement('div');
const newPostHeading = document.createElement('h5');
const newPostText = document.createElement('p');

// adding classes for the new elements
card.classList.add('card', 'some-space');
newCardBody.classList.add('card-body');
newPostHeading.classList.add('card-title');
newPostText.classList.add('card-text');

// pushing the new elements in to the HTML
newCardBody.appendChild(newPostHeading);
newCardBody.appendChild(newPostText);
card.appendChild(newCardBody);
postList.appendChild(card);

// Event listner for submit button
submit.addEventListener('click', ($event) => {
    $event.preventDefault();
    newPostHeading.textContent = `${title.value}`;
    newPostText.textContent = `${content.value}`;
    document.querySelector('form').reset();
});

// Event listner for checkbox
hobbies.addEventListener('change', ($event) => {     
    if ($event.target.checked === true) {
        span.appendChild(hobbies);
    } 
});

schoolLife.addEventListener('change', ($event) => {     
    if ($event.target.checked === true) {
        span.appendChild(schoolLife);
    } 
});

personal.addEventListener('change', ($event) => {     
    if ($event.target.checked === true) {
        span.appendChild(personal);
    } 
});
