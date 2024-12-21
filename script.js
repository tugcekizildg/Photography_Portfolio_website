const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active'); 
    offScreenMenu.classList.toggle('active');            

    if (offScreenMenu.classList.contains('active')) {    
        offScreenMenu.style.right = '0';
        
    } else {
        offScreenMenu.style.right = '-100%';
    }
});