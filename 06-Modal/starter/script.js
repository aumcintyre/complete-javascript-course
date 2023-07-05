'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

function openModal() {
    console.log('Button Clicked! 🎆');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function escapeKey(e) {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        }
        //if esc key was not pressed in combination with ctrl or alt or shift
        const isNotCombinedKey = !(e.ctrlKey || e.altKey || e.shiftKey);
        if (isNotCombinedKey) {
            console.log('Escape key was pressed with out any group keys')
        }
    }
    console.log(e.key);
}

function anyKey(e) {
    if (e.key !== 'Escape') {
        console.log(`They ${e.key} key was pressed`);
    }
    console.log(e);
}

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal)

overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', escapeKey);
document.addEventListener('keydown', anyKey)
//KEYDOWN - WHEN KEY IS PUSHED DOWN | KEYPRESS - CONTINUOUSLY WHILE KEY IS PRESSED
//CAN HAVE MULTIPLE EVENT LISTENERS ON DOCUMENT