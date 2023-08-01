function ativaletra(elemento){
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrTexto.forEach((letra, i)=>{
        setTimeout(()=>{
            elemento.innerHTML += letra
        }, 75 * i);
    });
}

const titulo = document.querySelector('.digitando');

ativaletra(titulo);
 

const navbar = document.querySelector('.navbar');
const mobilenavbar = document.querySelector('.navbar_mobile');
const button = document.querySelector('.burguer')

button.addEventListener('click', function () {
    mobilenavbar.classList.toggle('active');
});

window.addEventListener('scroll', function(){
    if (this.window.pageYOffset > 0) return navbar.classList.add('active')
    return navbar.classList.remove('active');
});