'use strict';

//crio constantes para selecionar o que preciso:
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//declaro variável como funcão para abrir o modal
const openModal = function () {
    modal.classList.remove('hidden');
};

//declaro variável como funcão para fechar o modal
const closeModal = function () {
    modal.classList.add('hidden');
};

//crio um looping para abrir e fechar o modal ao clicar na área dos botões
for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal[i].addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);

//crio um evento como uma funcão para fechar o modal ao pressionar a tecla ESC

document.addEventListener('keydown', function(e) {
if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
}
});

