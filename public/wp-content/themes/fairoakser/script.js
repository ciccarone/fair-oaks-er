window.addEventListener('DOMContentLoaded', (event) => {
    const acc_holder = document.querySelector('.acc__holder');
    const acc = document.querySelectorAll('.acc');

    acc.forEach((element, index) => {
        element.classList.add('disabled');
        if(index === 0) {
            element.classList.add('active');
            element.classList.remove('disabled');
        }
    });
});