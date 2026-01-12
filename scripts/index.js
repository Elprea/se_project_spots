const editProfileMainBtn = document.querySelector('.profile__edit-btn');
const editProfileModal = document.querySelector('#edit-profile-modal');
const editProfileCloseBtn = editProfileModal.querySelector('.modal__close-btn');

const newPostModal = document.querySelector('#new-post-modal');
const newPostMainBtn = document.querySelector('.profile__add-btn');
const newPostCloseBtn = newPostModal.querySelector('.modal__close-btn');

editProfileMainBtn.addEventListener('click', function(){
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
