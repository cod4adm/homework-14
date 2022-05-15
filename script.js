const openModal = document.getElementById('openModal');
const modalWindow = document.querySelector('.modal');
const closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', () => modalWindow.classList.add('show'));
closeModal.addEventListener('click', () => modalWindow.classList.remove('show'));