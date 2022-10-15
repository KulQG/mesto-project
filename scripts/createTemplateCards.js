const divCard = page.querySelector('.cards')
const cardTemplate = page.querySelector('.template').content

function addCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true)
  const cardImage = cardElement.querySelector('.card__image')

  cardImage.src = link
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
      cardPopup.classList.add('popup_opened')
      popupCardImage.src = link
      popupCardImage.alt = name
      popupCardDes.textContent = name
  })

  return cardElement;
}

initialCards.forEach((element) => {
  divCard.append(addCard(element.name, element.link))
})

const formAdd = page.querySelector('.form-add')
formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const popupInputPlaceNameValue = page.querySelector('.popup__input_type_place-name').value
  const popupInputLinkValue = page.querySelector('.popup__input_type_link').value

  divCard.prepend(addCard(popupInputPlaceNameValue, popupInputLinkValue))

  formAdd.reset();

  closePopup(popupAdd)
})