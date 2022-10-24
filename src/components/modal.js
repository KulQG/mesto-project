import {closeByEscape} from '../index'
export function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', closeByEscape)
}

export function closePopup(popup) {
    popup.classList.remove('popup_opened')
    document.addEventListener('keydown', closeByEscape)
}

export function savingText(saveBtn, isLoading, originalText) {
    if (isLoading) {
        saveBtn.value = 'Сохранение...'
    } else {
        saveBtn.value = originalText
    }
}

