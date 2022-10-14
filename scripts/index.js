const page = document.querySelector('.page')
const popups = page.querySelectorAll('.popup')
const popupEdit = page.querySelector('.popup-edit')
const popupAdd = page.querySelector('.popup-add')
const popupEditAva = page.querySelector('.popup-edit-ava')
const addButton = page.querySelector('.profile__add-button')
const cardPopup = page.querySelector('.popup-card')
const editButton = page.querySelector('.profile__edit-button')
const editBtnAva = page.querySelector('.profile__avatar')

//Открытие попапов
function openPopup(popup) {
  popup.classList.add('popup_opened')
}

/*export*/ const popupInputName = page.querySelector('.popup__input_type_name')
/*export*/ const popupInputDes = page.querySelector('.popup__input_type_des')
const profileName = page.querySelector('.profile__name')
const profileDes = page.querySelector('.profile__des')
editButton.addEventListener('click', () => {
  openPopup(popupEdit)
  popupInputName.value = profileName.textContent
  popupInputDes.value = profileDes.textContent
    }
)


addButton.addEventListener('click', () => {
  openPopup(popupAdd)
}
)

editBtnAva.addEventListener('click', () => {
  openPopup(popupEditAva)
})

//Закрытие попапов
const btnCloseEdit = page.querySelector('.popup-edit__button-close')
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

const btnCloseEditAva = page.querySelector('.popup-edit-ava__button-close')
btnCloseEditAva.addEventListener('click', () => {
  closePopup(popupEditAva)
})

/*popups.forEach((popup) => {
  popup.addEventListener('click', () => {
    closePopup(popup)
  })
})*/

popups.forEach((popup) => {
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      closePopup(popup)
    }
  })
})

function closePopup(popup) {
  popup.classList.remove('popup_opened')
}

//Изменение имени
page.querySelector('.form-edit').addEventListener('submit', (evt) => {
  evt.preventDefault()
  profileName.textContent = popupInputName.value
  profileDes.textContent = popupInputDes.value
  closePopup(popupEdit)
})



/////////////////////////////
/////////////////////////////
/////////////////////////////

//Создание новых карточек
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

//Создание новой карточки по нажатию кнопки
/*export*/ const formAdd = page.querySelector('.form-add')
formAdd.addEventListener('submit', (evt) => {
  evt.preventDefault()
  const popupInputPlaceNameValue = page.querySelector('.popup__input_type_place-name').value
  const popupInputLinkValue = page.querySelector('.popup__input_type_link').value

  divCard.prepend(addCard(popupInputPlaceNameValue, popupInputLinkValue))

  formAdd.reset();

  closePopup(popupAdd)
})

/*const inputs = document.querySelectorAll('.popup__input')
function s () {
  inputs.forEach((i) => {
    if (i.value === '') {
      i.classList.add('input_type_error');
      console.log('w')
    } else {
      i.classList.remove('input_type_error')
    }
  })
}

s();*/

///////////////////
//////////////////
/////////////////
//Валидация форм
/*const formEdit = page.querySelector('.form-edit')
const formInput = formEdit.querySelector('.popup__input')
const formError = formEdit.querySelector(`.${formInput.id}-error`)

const showError = (input, errorMessage) => {
  input.classList.add('popup__input_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('popup__input-error_active');
};

const hideError = (input) => {
  input.classList.remove('popup__input_type_error');
  formError.textContent = '';
  formError.classList.remove('popup__input-error_active');
}

const checkInputValidity = () => {
  if (!popupInputName.validity.valid) {
    showError(popupInputName, popupInputName.validationMessage);
  } else {
    hideError(popupInputName);
  }
}

popupInputName.addEventListener('input', function () {
  checkInputValidity();
});*/

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup'))
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
    })
    setEventListeners(formElement);
  })
}

enableValidation()
