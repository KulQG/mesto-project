import {
  page, popups, popupEdit, popupAdd, addButton, editButton,
  popupInputName, popupInputDes, profileName,
  profileDes, popupInputPlaceName, popupInputLink,
  formAdd, ava, popupEditAva, popupInputAva, avatarImage, formEditAva,
  btnSaveAdd, btnSaveEdit, btnSaveEditAva, btnCloseCard, cardPopup, cardsContainer
} from './components/utils'

import {
  fetchCards, fetchProfile,
  fetchPatchProfile, fetchAddCard,
  fetchPatchAva, catchCase
} from './components/api';

//import { initialCards } from './components/cards';
import { openPopup, closePopup, savingText } from './components/modal';
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
  savingText(btnSaveEdit, true, 'Сохранить')
  fetchPatchProfile(popupInputName.value, popupInputDes.value)
    .then(() => {
      profileName.textContent = popupInputName.value
      profileDes.textContent = popupInputDes.value
      closePopup(popupEdit)
    })
    .catch(catchCase)
    .finally(() => {
      savingText(btnSaveEdit, false, 'Сохранить')
    })
})

export let userMe
fetchProfile().then((data) => {
  profileName.textContent = data.name;
  profileDes.textContent = data.about;
  avatarImage.src = data.avatar
  userMe = data._id
}).then(() => {
  fetchCards().then((data) => {
    data.forEach((element) => {
      cardsContainer.append(addCard(element.name, element.link, element.owner._id,
        element._id, element.likes))
    })
  })
})

/////////открытие попапов
addButton.addEventListener('click', () => {
  openPopup(popupAdd)
}
)

ava.addEventListener('click', () => {
  openPopup(popupEditAva)
})

///////изменение аватара
formEditAva.addEventListener('submit', (evt) => {
  evt.preventDefault();
  savingText(btnSaveEditAva, true, 'Сохранить');
  fetchPatchAva(popupInputAva.value)
    .then(() => {
      avatarImage.src = popupInputAva.value
      closePopup(popupEditAva)
    })
    .catch(catchCase)
    .finally(() => {
      savingText(btnSaveEditAva, false, 'Сохранить')
    })
})

////////////////////

//

formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault()

  savingText(btnSaveAdd, true, 'Создать')

  fetchAddCard(popupInputPlaceName.value, popupInputLink.value)
    .then((data) => {
      cardsContainer.prepend(addCard(data.name, data.link, data.owner._id, data._id, data.likes))
      closePopup(popupAdd)
    })
    .catch(catchCase)
    .finally(() => { savingText(btnSaveAdd, false, 'Создать') })

  formAdd.reset();


  btnSaveAdd.classList.add(objValid.inactiveButtonClass)
  btnSaveAdd.setAttribute('disabled', "disabled")
})

///////////////////////

//Закрытие попапов

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

btnCloseCard.addEventListener('click', () => {
  closePopup(cardPopup)
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

/*const onePic = new URL('./images/(1).png', import.meta.url)
const twoPic = new URL('./images/(2).png', import.meta.url)
const threePic = new URL('./images/(3).png', import.meta.url)
const fourPic = new URL('./images/(4).png', import.meta.url)
const fivePic = new URL('./images/(5).png', import.meta.url)
const sixPic = new URL('./images/(6).png', import.meta.url)*/
const iconClose = new URL('./images/Close-Icon.svg', import.meta.url)
const svgEditButton = new URL('./images/Edit-Button.svg', import.meta.url)
const likeActive = new URL('./images/like_active.svg', import.meta.url)
const svgLike = new URL('./images/like.svg', import.meta.url)
const logo = new URL('./images/logo.svg', import.meta.url)
const plus = new URL('./images/plus.svg', import.meta.url)
const pen = new URL('./images/ruchka.png', import.meta.url)
const trashButtonSvg = new URL('./images/trash_button.svg', import.meta.url)

const images = [
  /*{ name: 'first pic', image: onePic },
  { name: 'second pic', link: twoPic },
  { name: 'thirst pic', link: threePic },
  { name: 'fourth pic', link: fourPic },
  { name: 'fifth pic', link: fivePic },
  { name: 'sixth pic', link: sixPic },*/
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
import { data } from 'autoprefixer';

