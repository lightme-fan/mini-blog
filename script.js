console.log('it works');

// code your solution in here

const postList = document.getElementById('post-list');
const card = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
const formGroup = document.querySelector('.form-group');
const newPostLine = document.querySelector('.new-post-line');
const newPostTitle = document.querySelector('#new-post-title');
console.log(newPostTitle);
const newPostContent = document.querySelector('#new-post-content');
console.log(newPostContent);

const newPostHeading = document.createElement('h5');
newPostHeading.classList.add('new-post-title');
newPostHeading.textContent = 'My article';
newPostTitle.appendChild('newPostHeading');

const newPostText = document.createElement('p');
newPostText.classList.add('new-post-text');
newPostText.textContent = `A hobby is a regular activity done for enjoyment, typically during one's leisure time, not professionally and not for pay. Hobbies include collecting themed items and objects, engaging in creative and artistic pursuits, playing sports, or pursuing other amusements.`;
newPostContent.appendChild('newPostText');

