const editProfileMainBtn = document.querySelector('.profile__edit-btn');
const editProfileModal = document.querySelector('#edit-profile-modal');
const editProfileCloseBtn = editProfileModal.querySelector('.modal__close-btn');
const editProfileForm = editProfileModal.querySelector('.modal__form');
const editProfileNameInput = editProfileModal.querySelector('#profile-name-input');
const editProfileDescriptionInput = editProfileModal.querySelector('#profile-description-input');

const newPostModal = document.querySelector('#new-post-modal');
const newPostMainBtn = document.querySelector('.profile__add-btn');
const newPostCloseBtn = newPostModal.querySelector('.modal__close-btn');
const newPostForm = newPostModal.querySelector('.modal__form');
const newPostImageInput = newPostModal.querySelector('#post-image-input');
const newPostDescriptionInput = newPostModal.querySelector('#post-description-input');

const profileNameEl = document.querySelector('.profile__name');
const profileDescriptionEl = document.querySelector('.profile__description');

editProfileMainBtn.addEventListener('click', function(){
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    editProfileModal.classList.add('modal__is-opened');
});

editProfileCloseBtn.addEventListener('click', function(){
    editProfileModal.classList.remove('modal__is-opened');
});

newPostMainBtn.addEventListener('click', function() {
    newPostModal.classList.add('modal__is-opened');
});

newPostCloseBtn.addEventListener('click', function(){
    newPostModal.classList.remove('modal__is-opened');
});

function handleEditProfileSubmit (evt) {
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDescriptionInput.value;
    editProfileModal.classList.remove('modal__is-opened');
    evt.preventDefault();
}

editProfileForm.addEventListener('submit', handleEditProfileSubmit);

function handleNewPostSubmit (evt) {
    console.log(newPostImageInput.value);
    console.log(newPostDescriptionInput.value);
    newPostModal.classList.remove('modal__is-opened');
    evt.preventDefault();
}

newPostForm.addEventListener('submit', handleNewPostSubmit);