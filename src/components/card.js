import { cardTemplate, cardPopup, popupCardImage, popupCardDes } from "./utils"
import { openPopup } from "./modal"
import { fetchDeleteCard, fetchPutLike, fetchDeleteLike} from "./api"
import { userMe } from "../index"

export function addCard(name, link, ownerId, cardId, likes) {
  const cardElement = cardTemplate.cloneNode(true)
  const cardImage = cardElement.querySelector('.card__image')
  const likesCount = cardElement.querySelector('.card__count-like')

  const likeMyId = likes.filter(like => like._id === userMe)

  cardImage.src = link
  cardElement.querySelector('.card__place-name').textContent = name
  cardImage.alt = name

  const deleteButton = cardElement.querySelector('.card__delete')
  if (ownerId === userMe) {
    deleteButton.addEventListener('click', () => {
      fetchDeleteCard(cardId)
      .then(() => {
        deleteButton.closest('.card').remove()
      })
    })
  } else {
    deleteButton.remove()
  }

  const likeButton = cardElement.querySelector('.card__like')
  likeButton.addEventListener('click', () => {
    if (likeButton.classList.contains('card__like_active')) {
      fetchDeleteLike(cardId)
        .then(() => {
          likeButton.classList.toggle('card__like_active')
          likesCount.textContent = parseInt(likesCount.textContent) - 1;
        })
    } else {
      fetchPutLike(cardId)
        .then(() => {
          likeButton.classList.toggle('card__like_active')
          likesCount.textContent = parseInt(likesCount.textContent) + 1;
        })
    }
  })

  if (likeMyId.length === 1) {
    likeButton.classList.add('card__like_active')
  }

  likesCount.textContent = likes.length;

  cardImage.addEventListener('click', () => {
    openPopup(cardPopup)
    popupCardImage.src = link
    popupCardImage.alt = name
    popupCardDes.textContent = name
  })
  return cardElement;
}






