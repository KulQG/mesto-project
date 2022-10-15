const page = document.querySelector('.page')
const popups = page.querySelectorAll('.popup')
const popupEdit = page.querySelector('.popup-edit')
const popupAdd = page.querySelector('.popup-add')
const popupEditAva = page.querySelector('.popup-edit-ava')
const addButton = page.querySelector('.profile__add-button')
const cardPopup = page.querySelector('.popup-card')
const editButton = page.querySelector('.profile__edit-button')
const editBtnAva = page.querySelector('.profile__avatar')

//Открытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened')
}

/*export*/ const popupInputName = page.querySelector('.popup__input_type_name')
/*export*/ const popupInputDes = page.querySelector('.popup__input_type_des')
const profileName = page.querySelector('.profile__name')
const profileDes = page.querySelector('.profile__des')
editButton.addEventListener('click', () => {
  openPopup(popupEdit)
  popupInputName.value = profileName.textContent
  popupInputDes.value = profileDes.textContent
    }
)

addButton.addEventListener('click', () => {
  openPopup(popupAdd)
}
)

editBtnAva.addEventListener('click', () => {
  openPopup(popupEditAva)
})

//Закрытие попапов
const btnCloseEdit = page.querySelector('.popup-edit__button-close')
btnCloseEdit.addEventListener('click', () => {
  closePopup(popupEdit)
})

const btnCloseAdd = page.querySelector('.popup-add__button-close')
btnCloseAdd.addEventListener('click', () => {
  closePopup(popupAdd)
})

const btnCloseCard = page.querySelector('.popup-card__button-close')
btnCloseCard.addEventListener('click', () => {
  closePopup(cardPopup)
})

const btnCloseEditAva = page.querySelector('.popup-edit-ava__button-close')
btnCloseEditAva.addEventListener('click', () => {
  closePopup(popupEditAva)
})

popups.forEach((popup) => {
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      closePopup(popup)
    }
  })
})

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    closePopup(evt.target)
  })
})

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

//Изменение имени
page.querySelector('.form-edit').addEventListener('submit', (evt) => {
  evt.preventDefault()
  profileName.textContent = popupInputName.value
  profileDes.textContent = popupInputDes.value
  closePopup(popupEdit)
})
