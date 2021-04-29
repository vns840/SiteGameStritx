/*Modal*/
function iniciaModal(modalID){
  const modal = document.getElementById(modalID);
  modal.classList.add('openModal');
  modal.addEventListener('click', (event) =>{
    if (event.target.id == modalID || event.target.className == 'close') {
        modal.classList.remove('openModal')
    }
  });
}

const legenda = document.querySelector('.legenda-modal');
legenda.addEventListener('click',() => iniciaModal('modal-protagonista'));
 
/*Cdastro*/
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});