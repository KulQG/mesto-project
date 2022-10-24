import { cardTemplate, cardPopup, popupCardImage, popupCardDes} from "./utils"
import { openPopup } from "./modal"
import { fetchDeleteCard, fetchPutLike, fetchDeleteLike } from "./api"

export function addCard(name, link, ownerId, cardId, likes) {
  const cardElement = cardTemplate.cloneNode(true)
  const cardImage = cardElement.querySelector('.card__image')
  const likesCount = cardElement.querySelector('.card__count-like')
  const likeMyId = likes.filter(like => like._id === 'c35cf3550c5f628c7b9fb729')



  cardImage.src = link
  cardElement.querySelector('.card__place-name').textContent = name
  cardImage.alt = name

  const deleteButton = cardElement.querySelector('.card__delete')
  if (ownerId === 'c35cf3550c5f628c7b9fb729') {
    deleteButton.addEventListener('click', () => {
      deleteButton.closest('.card').remove()
       fetchDeleteCard(cardId)
    })
  } else {
    deleteButton.remove()
  }

  const likeButton = cardElement.querySelector('.card__like')
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('card__like_active')
    if (likeButton.classList.contains('card__like_active')) {
      fetchPutLike(cardId)
      likesCount.textContent = parseInt(likesCount.textContent)+1;
    } else {
      fetchDeleteLike(cardId)
      likesCount.textContent = parseInt(likesCount.textContent)-1;
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






