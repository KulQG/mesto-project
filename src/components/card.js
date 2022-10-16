import { cardTemplate, cardPopup } from "./utils"
import { openPopup } from "./modal"


export function addCard(name, link) {
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





