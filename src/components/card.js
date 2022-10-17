import { cardTemplate, cardPopup, popupCardImage, popupCardDes } from "./utils"
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

  cardImage.addEventListener('click', () => {
    openPopup(cardPopup)
    popupCardImage.src = link
    popupCardImage.alt = name
    popupCardDes.textContent = name
  })

  return cardElement;
}





