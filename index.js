function showSubmenu() {
    var submenu = document.querySelector('.submenu');
    submenu.style.display = 'block';
}

function hideSubmenu() {
    var submenu = document.querySelector('.submenu');
    submenu.style.display = 'none';
}

        // Navaigation Bar

        $('#menu-btn').click(function() {
          $('nav .navigation ul').addClass('active')  
        });

        $('#menu-close').click(function() {
          $('nav .navigation ul').removeClass('active')  
        });

        // hide submenu    

const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')


registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})