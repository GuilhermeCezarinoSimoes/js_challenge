// Função de slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

//animação para os links do cabeçalho
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s';
    });
    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

//função de login com alertas e prompts
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    //simular
    const validUsername = 'admin';
    const validPassword = '1234';
    
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    if (username === validUsername && password === validPassword) {
        alert('Login bem-sucedido! Redirecionando para a página Supercars.');
        //redireciona para a página Supercars
        window.location.href = 'supercars.html';
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
        
        //pergunta se o usuário quer tentar novamente
        const tryAgain = confirm('Deseja tentar novamente?');
        
        if (tryAgain) {
            //limpa o campo do formulário para tentar novamente
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }
    }
}
