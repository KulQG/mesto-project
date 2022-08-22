const page = document.querySelector('.page')
const popups = page.querySelectorAll('.popup')
const popupEdit = page.querySelector('.popup-edit')
const popupAdd = page.querySelector('.popup-add')
const addButton = page.querySelector('.profile__add-button')
const cardPopup = page.querySelector('.popup-card')
const editButton = page.querySelector('.profile__edit-button')

//Открытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened')
}

editButton.addEventListener('click', () => {
  openPopup(popupEdit)
    }
  )
addButton.addEventListener('click', () => {
  openPopup(popupAdd)
}
)

//Закрытие попапов
page.querySelector('.popup-edit__button-close').addEventListener('click', () => {
  closePopup(popupEdit)
})

page.querySelector('.popup-add__button-close').addEventListener('click', () => {
  closePopup(popupAdd)
})

page.querySelector('.popup-card__button-close').addEventListener('click', () => {
  closePopup(cardPopup)
})

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

//Изменение имени
const popupInputName = page.querySelector('.popup__input_type_name')
  const popupInputDes = page.querySelector('.popup__input_type_des')
  const profileName = page.querySelector('.profile__name')
  const profileDes = page.querySelector('.profile__des')
page.querySelector('.form-edit').addEventListener('submit', (evt) => {
  evt.preventDefault()
  profileName.textContent = popupInputName.value
  profileDes.textContent = popupInputDes.value
  closePopup(popupEdit)
})

/////////////////////////////
/////////////////////////////
/////////////////////////////

//Создание новых карточек
const divCard = page.querySelector('.cards')
const cardTemplate = page.querySelector('.template').content

function addCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true)
  const cardImage = cardElement.querySelector('.card__image')

  cardElement.querySelector('.card__image').src = link
  cardElement.querySelector('.card__place-name').textContent = name
  cardImage.alt = name 

  const deleteButton = cardElement.querySelector('.card__delete')
  deleteButton.addEventListener('click', () => {
    deleteButton.closest('.card').remove()
  })

  const likeButton = cardElement.querySelector('.card__like')
    likeButton.addEventListener('click', () => {
      likeButton.classList.toggle('card__like_active')
  })
 
  const popupCardImage = cardPopup.querySelector('.popup-card__image')
  const popupCardDes = cardPopup.querySelector('.popup-card__des')
    cardImage.addEventListener('click', () => {
      openPopup(cardPopup)
      //cardPopup.classList.add('popup_opened')
      popupCardImage.src = link
      popupCardImage.alt = name
      popupCardDes.textContent = name
  })

  return cardElement;
}

initialCards.forEach((element) => {
  divCard.append(addCard(element.name, element.link))
})

//Создание новой карточки по нажатию кнопки
const formAdd = page.querySelector('.form-add')
formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const popupInputPlaceNameValue = page.querySelector('.popup__input_type_place-name').value
  const popupInputLinkValue = page.querySelector('.popup__input_type_link').value

  divCard.prepend(addCard(popupInputPlaceNameValue, popupInputLinkValue))

  formAdd.reset();

  closePopup(popupAdd)
})
