console.log('it works');

// code your solution in here

const postList = document.getElementById('post-list');
const someSpace = document.querySelector('.some-space');
const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const formGroup = document.querySelector('.form-group');
const newPostLine = document.querySelector('.new-post-line');
const form = document.querySelector("form");
const newPostTitle = document.querySelector('#new-post-title');
const newPostContent = document.querySelector('#new-post-content');
const hobbiesTag = document.getElementById('hobbies-tag');
const schoolLifeTag = document.getElementById('school-life-tag');
const personalTag = document.getElementById('personal-tag');
const submit = document.querySelector('#submit-form');

const newcardBody = document.createElement('div');
newcardBody.classList.add('card-body');
console.log(newcardBody);

const newPostHeading = document.createElement('h5');
newPostHeading.classList.add('new-post-title');
newPostHeading.textContent = 'My article';

const newPostText = document.createElement('p');
newPostText.classList.add('new-post-text');
newPostText.textContent = `A hobby is a regular activity done for enjoyment, typically during one's leisure time, not professionally and not for pay. Hobbies include collecting themed items and objects, engaging in creative and artistic pursuits, playing sports, or pursuing other amusements.`;

newcardBody.appendChild(newPostHeading);
newcardBody.appendChild(newPostText);


form.addEventListener("click", ($event) => {
    $event.preventDefault();
    someSpace.appendChild(newcardBody);
    
});
