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

function openModal(modal) {
    modal.classList.add('modal_is-opened');
}

function closeModal(modal) {
    modal.classList.remove('modal_is-opened');
}

editProfileMainBtn.addEventListener('click', function(){
    editProfileNameInput.value = profileNameEl.textContent;
    editProfileDescriptionInput.value = profileDescriptionEl.textContent;
    openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener('click', function(){
    closeModal(editProfileModal);
});

newPostMainBtn.addEventListener('click', function() {
    openModal(newPostModal);
});

newPostCloseBtn.addEventListener('click', function(){
    closeModal(newPostModal);
});

function handleEditProfileSubmit (evt) {
    profileNameEl.textContent = editProfileNameInput.value;
    profileDescriptionEl.textContent = editProfileDescriptionInput.value;
    closeModal(editProfileModal);
    evt.preventDefault();
}

editProfileForm.addEventListener('submit', handleEditProfileSubmit);

function handleNewPostSubmit (evt) {
    console.log(newPostImageInput.value);
    console.log(newPostDescriptionInput.value);
    closeModal(newPostModal);
    evt.preventDefault();
}

newPostForm.addEventListener('submit', handleNewPostSubmit);