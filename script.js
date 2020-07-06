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
const firstNewSpan = document.createElement('span');
const secondNewSpan = document.createElement('span');
const thirdNewSpan = document.createElement('span');

// Checkbox content
firstNewSpan.textContent = 'hobbies';
secondNewSpan.textContent = 'School Life';
thirdNewSpan.textContent = 'Personal';

// adding classes for the new elements
card.classList.add('card', 'some-space');
newCardBody.classList.add('card-body');
newPostHeading.classList.add('card-title');
newPostText.classList.add('card-text');
firstNewSpan.classList.add('badge', 'badge-light', 'hidden');
secondNewSpan.classList.add('badge', 'badge-light', 'hidden');
thirdNewSpan.classList.add('badge', 'badge-light', 'hidden');


// pushing the new elements in to the HTML
newCardBody.appendChild(newPostHeading);
newCardBody.appendChild(newPostText);
newCardBody.appendChild(firstNewSpan);
newCardBody.appendChild(secondNewSpan);
newCardBody.appendChild(thirdNewSpan);
card.appendChild(newCardBody);
postList.appendChild(card);
console.log(card);

// Event listner for submit button
submit.addEventListener('click', ($event) => {
    $event.preventDefault();
    newPostHeading.textContent = `${title.value}`;
    newPostText.textContent = `${content.value}`;

    if (hobbies.checked) {
        firstNewSpan.classList.remove('hidden');
    }

    if (schoolLife.checked) {
        secondNewSpan.classList.remove('hidden');
    }

    if (personal.checked) {
        thirdNewSpan.classList.remove('hidden');
    }

    document.querySelector('form').reset();
});
