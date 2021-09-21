const modal = document.querySelector('.modal')
const modalCloseIcon = document.querySelector('.modal__close');

const openModal = () => modal.classList.add("modal_active");

const closeModal = () => {
    document.cookie='modal=close'
    modal.classList.remove("modal_active")
};

(() => {
    const value = document.cookie.split("=")[1];
    if (value === 'close') { return }
    setTimeout(openModal, 2000)
})()

modalCloseIcon.addEventListener('click', closeModal)