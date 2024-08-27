const btnPlus = document.querySelector('#btn-plus');

// PARA ABRIR O MODAL PELO BOTÃO
function toggleModal(){
    const content = document.querySelector('.modal');
    
    content.classList.toggle('ativar');
}
btnPlus.addEventListener('click', toggleModal);

// CLICANDO FORA DO MODAL
function closeModal(event) {
    const content = document.querySelector('.modal');
    
    if (event.target === content) {
        // content.style.display = 'none'
        content.classList.toggle('ativar');
    }
}
document.querySelector('.modal').addEventListener('click', closeModal);