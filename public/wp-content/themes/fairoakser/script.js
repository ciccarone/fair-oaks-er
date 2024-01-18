window.addEventListener('DOMContentLoaded', (event) => {
    const acc_holder = document.querySelector('.acc__holder');
    const acc = document.querySelectorAll('.acc');

    console.log(`Found ${acc.length} .acc elements`);

    acc.forEach((element, index) => {
        element.classList.add('disabled');
        if(index === 0) {
            element.classList.add('active');
            element.classList.remove('disabled');
        }
    });

    const acc_headers = document.querySelectorAll('.acc__header');
    console.log(`Found ${acc_headers.length} .acc__header elements`);

    acc_headers.forEach((header) => {
        header.addEventListener('click', (event) => {
            console.log('Header clicked');
            acc.forEach((element) => {
                element.classList.remove('active');
                element.classList.add('disabled');
            });
            const parentAcc = header.parentElement;
            parentAcc.classList.add('active');
            parentAcc.classList.remove('disabled');
        });
    });
});