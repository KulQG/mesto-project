const page = document.querySelector('.page');
const $popups = page.querySelectorAll('.popup');
const popup = page.querySelector('.popup');
const popupEdit = page.querySelector('.popup_type_edit');
const popupAdd = page.querySelector('.popup_type_add');
const popupInputTop = popup.querySelector('.popup__input_type_top');
const popupInputBottom = popup.querySelector('.popup__input_type_bottom');
const profileName = page.querySelector('.profile__name');
const profileDes = page.querySelector('.profile__des');
const addButton = page.querySelector('.profile__add-button');

const openBtns = page.querySelectorAll('.button-open')
const openbtn = page.querySelector('.button-open')
function togglePopup() {
    const indexOpen = Array.from(openBtns).indexOf(this);
    $popups[indexOpen].classList.toggle('popup_opened')
};
openBtns.forEach(openBtn => openBtn.addEventListener('click', togglePopup));

const closeButtons = page.querySelectorAll('.popup__button-close');
const closeButton = page.querySelector('.popup__button-close');
closeButtons.forEach(function(item) {
        item.addEventListener('click', function() {
        page.querySelector('.popup_opened').classList.remove('popup_opened')
    })});


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

const likeButton = page.querySelector('.card__like');
const likeButtons = page.querySelectorAll('.card__like');
likeButtons.forEach(likeButton => likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('card__like_active')
})); 


//closeOpenPopupEdit();
//closeOpenPopupAdd();