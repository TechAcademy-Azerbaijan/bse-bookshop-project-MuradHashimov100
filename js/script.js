const openMenu = document.querySelector('header .openmenu');
const menyu = document.querySelector('.qasqabaq');
openMenu.addEventListener("click", function(){
    menyu.classList.toggle("active");
    console.log('btn clicked');
});