const page = document.querySelector('.page')
const $popups = page.querySelectorAll('.popup')
const popup = page.querySelector('.popup')
const popupEdit = page.querySelector('.popup_type_edit')
const popupAdd = page.querySelector('.popup_type_add')
const addButton = page.querySelector('.profile__add-button')
const cardPopup = page.querySelector('.popup-card')

//Открытие попапов
const openButtons = page.querySelectorAll('.button-open')
function openPopup() {
  const indexOpen = Array.from(openButtons).indexOf(this)
  $popups[indexOpen].classList.toggle('popup_opened')
}
openButtons.forEach((openButton) => openButton.addEventListener('click', openPopup))

//Закрытие попапов
const closeButtons = page.querySelectorAll('.button-close')
closeButtons.forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    closePopup()
  })
})

function closePopup() {
  popupEdit.classList.remove('popup_opened')
  popupAdd.classList.remove('popup_opened')
  cardPopup.classList.remove('popup-card_opened')
}

//Изменение имени
popupEdit.addEventListener('submit', (evt) => {
  const popupInputName = popup.querySelector('.popup__input_type_name')
  const popupInputDes = popup.querySelector('.popup__input_type_des')
  const profileName = page.querySelector('.profile__name')
  const profileDes = page.querySelector('.profile__des')
  evt.preventDefault()
  profileName.textContent = popupInputName.value
  profileDes.textContent = popupInputDes.value
  closePopup()
})

/////////////////////////////
/////////////////////////////
/////////////////////////////

//Создание новых карточек
const divCards = page.querySelector('.cards')
const cardTemplate = page.querySelector('.template').content
const initialCards = [
  {
    name: 'Архыз',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
]

function addCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true)

  cardElement.querySelector('.card__image').src = link
  cardElement.querySelector('.card__place-name').textContent = name

  const deleteButton = cardElement.querySelector('.card__delete')
  deleteButton.addEventListener('click', () => {
    deleteButton.closest('.card').remove()
  })

  const likeButton = cardElement.querySelector('.card__like')
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('card__like_active')
  })

  const cardImage = cardElement.querySelector('.card__image') 
    cardImage.addEventListener('click', () => {
      cardPopup.classList.add('popup-card_opened')
      cardPopup.querySelector('.popup-card__image').src = link
      cardPopup.querySelector('.popup-card__des').textContent = name
  })

  return cardElement;
}

initialCards.forEach((element) => {
  divCards.append(addCard(element.name, element.link))
})

//Создание новой карточки по нажатию кнопки
popupAdd.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const popupInputPlaceNameValue = page.querySelector('.popup__input_type_place-name').value
  const popupInputLinkValue = page.querySelector('.popup__input_type_link').value

  divCards.prepend(addCard(popupInputPlaceNameValue, popupInputLinkValue))

  closePopup()
})
