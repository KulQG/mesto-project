import { savingText } from "./modal";
import { btnSaveAdd, btnSaveEdit, btnSaveEditAva } from "./utils";

const authorization = { authorization: '1f5d3f31-a1ad-4ce2-8d6b-4c6577c82862' };
const authorPlusContent = {
    authorization: '1f5d3f31-a1ad-4ce2-8d6b-4c6577c82862',
    'Content-Type': 'application/json'
}
const urlCards = 'https://nomoreparties.co/v1/plus-cohort-16/cards';
const urlUser = 'https://nomoreparties.co/v1/plus-cohort-16/users/me';

const catchCase = (err) => { console.log(err) }
const checkRes = res => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}


//получение карточек
export async function fetchCards() {
    try {
        const res = await fetch(urlCards, {
            headers: authorization
        });
        return checkRes(res);
    } catch (err) {
        return catchCase(err);
    }
}

//получение данных пользователя
export async function fetchProfile() {
    try {
        const res = await fetch(urlUser, {
            headers: authorization
        });
        return checkRes(res);
    } catch (err) {
        return catchCase(err);
    }
}

//отправление данных пользователя
export function fetchPatchProfile(name, des) {
    return fetch(urlUser, {
        method: 'PATCH',
        headers: authorPlusContent,
        body: JSON.stringify({
            name: name,
            about: des
        })
    })
        .catch(catchCase)
        .finally(() => {
            savingText(btnSaveEdit, false, 'Сохранить')
        })
}

//отправление карточек
export function fetchAddCard(nameCard, linkCard) {
    return fetch(urlCards, {
        method: 'POST',
        headers: authorPlusContent,
        body: JSON.stringify({
            name: nameCard,
            link: linkCard
        })
    })
        .then((res) => {
            return res.json()
        })
        .catch(catchCase)
}

//удаление карточки
export async function fetchDeleteCard(cardId) {
    try {
        return await fetch(`https://nomoreparties.co/v1/plus-cohort-16/cards/${cardId}`, {
            method: 'DELETE',
            headers: authorization
        });
    } catch (err) {
        return catchCase(err);
    }
}

//Лайк карточки
export async function fetchPutLike(cardId) {
    try {
        return await fetch(`https://nomoreparties.co/v1/plus-cohort-16/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: authorization
        });
    } catch (err) {
        return catchCase(err);
    }
}

//удаление лайка
export async function fetchDeleteLike(cardId) {
    try {
        return await fetch(`https://nomoreparties.co/v1/plus-cohort-16/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: authorization
        });
    } catch (err) {
        return catchCase(err);
    }
}

//изменение аватара
export function fetchPatchAva(link) {
    return fetch('https://nomoreparties.co/v1/plus-cohort-16/users/me/avatar', {
        method: 'PATCH',
        headers: authorPlusContent,
        body: JSON.stringify({
            avatar: link
        })
    })
        .catch(catchCase)
        .finally(() => {
            savingText(btnSaveEditAva, false, 'Сохранить')
        })
}
