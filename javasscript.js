document.querySelector('.button-sign-in').addEventListener('click', () => {
    document.querySelector('.row').style.display = 'none';
    document.querySelector('.sign-in-form').style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.button-sign-in2').addEventListener('click', () => {
    document.querySelector('.sign-in-form').style.display = 'none';
    document.querySelector('.sign-in-form-page2').style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.button-sign-in3').addEventListener('click', () => {
    document.querySelector('.sign-in-form-page2').style.display = 'none';
    document.querySelector('.sign-in-form-page3').style.cssText = 'opacity: 1; visibility: visible';
});

document.querySelector('.button-sign-in4').addEventListener('click', () => {
    document.querySelector('.sign-in-form-page3').style.display = 'none';
    document.querySelector('.sign-in-form-page4').style.cssText = 'opacity: 1; visibility: visible';
});



