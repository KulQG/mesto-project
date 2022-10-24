const page = document.querySelector('.page')
const popups = page.querySelectorAll('.popup')
const popupEdit = page.querySelector('.popup-edit')
const popupAdd = page.querySelector('.popup-add')
const popupEditAva = page.querySelector('.popup-edit-ava')
const addButton = page.querySelector('.profile__add-button')
const cardPopup = page.querySelector('.popup-card')
const editButton = page.querySelector('.profile__edit-button')
const divCard = page.querySelector('.cards')
const cardTemplate = page.querySelector('.template').content
const popupInputName = page.querySelector('.popup__input_type_name')
const popupInputDes = page.querySelector('.popup__input_type_des')
const profileName = page.querySelector('.profile__name')
const profileDes = page.querySelector('.profile__des')
const popupInputPlaceName = page.querySelector('.popup__input_type_place-name');
const popupInputLink = page.querySelector('.popup__input_type_link');
const popupCardImage = cardPopup.querySelector('.popup-card__image')
const popupCardDes = cardPopup.querySelector('.popup-card__des')
const ava = document.querySelector('.profile__ava-plus-over')
const avatarImage = document.querySelector('.profile__avatar')
const formAdd = page.querySelector('.form-add')
const popupInputAva = page.querySelector('.popup__input_type_ava')
const formEditAva = page.querySelector('.form-edit-ava')
const btnSaveEdit = page.querySelector('.popup-edit__button-save')
const btnSaveAdd = page.querySelector('.button-save-add')
const btnSaveEditAva = document.querySelector('.popup-edit-ava__button-save')
const btnCloseCard = page.querySelector('.popup-card__button-close')

export { 
    page, popups, popupEdit, popupAdd, addButton, cardPopup, editButton,
    divCard, cardTemplate, popupInputName, popupInputDes, profileName, 
    profileDes,popupInputPlaceName,popupInputLink,popupCardImage,
    popupCardDes, ava, formAdd, popupEditAva, popupInputAva, avatarImage,
    formEditAva, btnSaveAdd, btnSaveEdit, btnSaveEditAva, btnCloseCard
}