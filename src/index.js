import {
  page, popups, popupEdit, popupAdd, addButton, cardPopup, editButton,
  divCard, popupInputName, popupInputDes, profileName, 
  profileDes, popupInputPlaceName,popupInputLink
} from './components/utils'

import { initialCards } from './components/cards';
import { openPopup, closePopup } from './components/modal';
import { addCard } from './components/card';


//////////изменение имени
editButton.addEventListener('click', () => {
  openPopup(popupEdit)
  popupInputName.value = profileName.textContent
  popupInputDes.value = profileDes.textContent
}
)

page.querySelector('.form-edit').addEventListener('submit', (evt) => {
  evt.preventDefault()
  profileName.textContent = popupInputName.value
  profileDes.textContent = popupInputDes.value
  closePopup(popupEdit)
})

/////////открытие попапов

addButton.addEventListener('click', () => {
  openPopup(popupAdd)
}
)

/*editBtnAva.addEventListener('click', () => {
  openPopup(popupEditAva)
})*/

////////////////////

initialCards.forEach((element) => {
  divCard.append(addCard(element.name, element.link))
})

const formAdd = page.querySelector('.form-add')
formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault()
  //const popupInputPlaceNameValue = page.querySelector('.popup__input_type_place-name').value
  //const popupInputLinkValue = page.querySelector('.popup__input_type_link').value

  divCard.prepend(addCard(popupInputPlaceName.value, popupInputLink.value))

  formAdd.reset();

  closePopup(popupAdd)
})

///////////////////////

//Закрытие попапов
/*const btnCloseEdit = page.querySelector('.popup-edit__button-close')
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

/*const btnCloseEditAva = page.querySelector('.popup-edit-ava__button-close')
btnCloseEditAva.addEventListener('click', () => {
  closePopup(popupEditAva)
})*/


popups.forEach((popup) => {
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 'Escape') {
      closePopup(popup)
    }
  })
})


export function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
  
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
          closePopup(popup)
      }
      if (evt.target.classList.contains('popup__close')) {
        closePopup(popup)
      }
  })
})


//////////валидация
import { enableValidation } from './components/validate'
const objValid = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

enableValidation(objValid)
//////////


const onePic = new URL('./images/(1).png', import.meta.url)
const twoPic = new URL('./images/(2).png', import.meta.url)
const threePic = new URL('./images/(3).png', import.meta.url)
const fourPic = new URL('./images/(4).png', import.meta.url)
const fivePic = new URL('./images/(5).png', import.meta.url)
const sixPic = new URL('./images/(6).png', import.meta.url)
const iconClose = new URL('./images/Close-Icon.svg', import.meta.url)
const svgEditButton = new URL('./images/Edit-Button.svg', import.meta.url)
const likeActive = new URL('./images/like_active.svg', import.meta.url)
const svgLike = new URL('./images/like.svg', import.meta.url)
const logo = new URL('./images/logo.svg', import.meta.url)
const plus = new URL('./images/plus.svg', import.meta.url)
const pen = new URL('./images/ruchka.png', import.meta.url)
const trashButtonSvg = new URL('./images/trash_button.svg', import.meta.url)

const images = [
  { name: 'first pic', image: onePic },
  { name: 'second pic', link: twoPic },
  { name: 'thirst pic', link: threePic },
  { name: 'fourth pic', link: fourPic },
  { name: 'fifth pic', link: fivePic },
  { name: 'sixth pic', link: sixPic },
  { name: 'icon close', link: iconClose },
  { name: 'edit button svg', link: svgEditButton },
  { name: 'like active', link: likeActive },
  { name: 'like svg', link: svgLike },
  { name: 'logotype', link: logo },
  { name: 'plus', link: plus },
  { name: 'pen', link: pen },
  { name: 'trash button', link: trashButtonSvg }
]

import './pages/index.css';
//import { from } from 'core-js/core/array';

