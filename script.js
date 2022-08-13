const page = document.querySelector('.page');
const $popup = page.querySelectorAll('.popup');
const popup = page.querySelector('.popup');
const popupEdit = page.querySelector('.popup_type_edit');
const popupAdd = page.querySelector('.popup_type_add');
const closeButton = page.querySelector('.popup__button-close');
const editButton = page.querySelector('.profile__edit-button');
const popupInputTop = popup.querySelector('.popup__input_type_top');
const popupInputBottom = popup.querySelector('.popup__input_type_bottom');
const profileName = page.querySelector('.profile__name');
const profileDes = page.querySelector('.profile__des');
const addButton = page.querySelector('.profile__add-button');

function closeOpenPopupEdit() {
    popupEdit.classList.toggle('popup_opened');
};
closeButton.addEventListener('click', closeOpenPopupEdit);
editButton.addEventListener('click', closeOpenPopupEdit);

/*function closeOpenPopupAdd() {
    popupAdd.classList.toggle('.popup_opened')
};
closeButton.addEventListener('click', closeOpenPopupAdd);
addButton.addEventListener('click', closeOpenPopupAdd);*/

/*function addCard (popupInputTop.value, popupInputBottom.value) {
    const cardTemplate = page.querySelector('.template').content;
    const card = cardTemplate.querySelector('.card').cloneNode(true);
    const cards = page.querySelector('.cards');

    card.querySelector('card__place-name').textContent = popupInputTop.value;
    card.querySelector('.card__image').src = popupInputBottom.value;

    cards.node(card);
}*/

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = popupInputTop.value;
    profileDes.textContent = popupInputBottom.value;
    closeOpenPopupEdit();
};
popup.addEventListener('submit', formSubmitHandler);

const likeButtons = page.querySelectorAll('.card__like');
likeButtons.forEach($targetItem.addEventListener('click', () => {
    $targetItem.classList.toggle('card__like_active')
    })); 


closeOpenPopupEdit();
//closeOpenPopupAdd();