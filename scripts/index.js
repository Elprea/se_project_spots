const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },
  {
    name: "Val Thorens",
    link: "./images/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "./images/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "./images/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "./images/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "./images/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "./images/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileMainBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input",
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input",
);

const newPostModal = document.querySelector("#new-post-modal");
const newPostMainBtn = document.querySelector(".profile__add-btn");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageInput = newPostModal.querySelector("#card-link-input");
const newPostDescriptionInput = newPostModal.querySelector(
  "#post-description-input",
);

const viewImageModal = document.querySelector("#view-image-modal");
const viewImageCloseBtn = viewImageModal.querySelector(".modal__close-btn");
const viewImageEl = viewImageModal.querySelector(".modal__image");
const viewImageCaptionEl = viewImageModal.querySelector(
  ".modal__image-caption",
);

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

const cardSubmitBtn = newPostForm.querySelector(".modal__button");
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

function handleEscape(event){
  if (event.key === "Escape"){
    closeModal(document.querySelector(".modal_is-opened"));
  }
}

function handleClickOutside(event){
  if(event.target.classList.contains("modal_is-opened")){
    closeModal(document.querySelector(".modal_is-opened"));
  }
}

function openModal(modal) {
  modal.classList.add("modal_is-opened");

  document.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");

  document.removeEventListener("click", handleClickOutside);
  document.removeEventListener("keydown", handleEscape);
}

editProfileMainBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  resetValidation(
    editProfileForm,
    [editProfileNameInput, editProfileDescriptionInput],
    settings,
  );
  openModal(editProfileModal);
});

editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

newPostMainBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

viewImageCloseBtn.addEventListener("click", function () {
  closeModal(viewImageModal);
});

function handleEditProfileSubmit(evt) {
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
  evt.preventDefault();
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  const newCardData = {
    name: newPostDescriptionInput.value,
    link: newPostImageInput.value,
  };
  const cardElement = getCardElement(newCardData);
  cardsList.prepend(cardElement);
  newPostForm.reset();

  disableButton(cardSubmitBtn, settings);
  closeModal(newPostModal);
  evt.preventDefault();
}

newPostForm.addEventListener("submit", handleNewPostSubmit);

function getCardElement(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardLikeBtn = cardElement.querySelector(".card__like-btn");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-btn");

  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;
  cardTitleEl.textContent = data.name;

  cardLikeBtn.addEventListener("click", function () {
    cardLikeBtn.classList.toggle("card__like-btn_liked");
  });

  cardDeleteBtn.addEventListener("click", function () {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", function () {
    viewImageEl.src = data.link;
    viewImageEl.alt = data.name;
    viewImageCaptionEl.textContent = data.name;
    openModal(viewImageModal);
  });

  return cardElement;
}

initialCards.forEach(function (item) {
  const cardElement = getCardElement(item);
  cardsList.append(cardElement);
});
