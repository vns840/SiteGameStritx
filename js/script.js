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
 
/*modal mosntro*/
function iniciaModal1(modalID){
  const modal1 = document.getElementById(modalID);
  modal1.classList.add('openModal1');
  modal1.addEventListener('click', (event) =>{
    if (event.target.id == modalID || event.target.className == 'close') {
        modal1.classList.remove('openModal1')
    }
  });
}

const legenda1 = document.querySelector('.legenda-modal1');
legenda1.addEventListener('click',() => iniciaModal('modal-monstro'));

/*modal cenario*/
function iniciaModal1(modalID){
  const modal2 = document.getElementById(modalID);
  modal2.classList.add('openModal2');
  modal2.addEventListener('click', (event) =>{
    if (event.target.id == modalID || event.target.className == 'close') {
        modal2.classList.remove('openModal2')
    }
  });
}

const legenda2 = document.querySelector('.legenda-modal2');
legenda2.addEventListener('click',() => iniciaModal('modal-cenarios'));

/*modal historia*/
function iniciaModal1(modalID){
  const modal3 = document.getElementById(modalID);
  modal3.classList.add('openModal3');
  modal3.addEventListener('click', (event) =>{
    if (event.target.id == modalID || event.target.className == 'close') {
        modal3.classList.remove('openModal3')
    }
  });
}

const legenda3 = document.querySelector('.legenda-modal3');
legenda3.addEventListener('click',() => iniciaModal('modal-historia'));

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