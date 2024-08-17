const carousels = document.querySelectorAll('.carousel');

carousels.forEach(carousel => {
    let position = 0;
    const slides = carousel.querySelector('.carousel-slide');
    let interval = setInterval(nextSlide, 5000);

    const pagination = carousel.querySelector('.carousel-pagination');
    
    if (pagination) {
        for (let i = 0; i < slides.children.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('carousel-bullet');
            dot.style.backgroundColor = pagination.dataset.color;

            dot.addEventListener('click', (ev) => {
                const dot = ev.currentTarget;
                clearInterval(interval);
                interval = setInterval(nextSlide, 5000);
                const pagPosition = position * slides.children.length / 300 * -1;
                const prevPag = pagination.children[pagPosition];
                position = i * -300 / slides.children.length;
                slides.style.transform = `translateX(${position}%)`;
                prevPag.style.transform = 'scale(1)';
                prevPag.style.filter = 'brightness(75%)';
                dot.style.filter = 'brightness(100%)';
                dot.style.transform = 'scale(1.5)';

            });
            pagination.appendChild(dot);
        };
        pagination.children[0].style.transform = 'scale(1.5)';
        pagination.children[0].style.filter = 'brightness(100%)';
    }

    function nextSlide () {
        clearInterval(interval);
        interval = setInterval(nextSlide, 5000);
        position = position - 100;
        console.log(position);
        if (position <= -100 * slides.children.length) {
            position = 0;
        };

        slides.style.transform = `translateX(${position}%)`;

        if (pagination) {
            const pagPosition = position / 100 * -1;
            const currPag = pagination.children[pagPosition];
            const prevPag = pagination.children[pagPosition === 0 ? slides.children.length - 1 : pagPosition - 1];
            prevPag.style.transform = 'scale(1)';
            prevPag.style.filter = 'brightness(75%)';
            currPag.style.filter = 'brightness(100%)';
            currPag.style.transform = 'scale(1.5)';
        }


    }

    function previousSlide() {
        position = position + 100;
            if (position > 0) {
                position = 100 * (slides.children.length - 1) * -1;
            };
            slides.style.transform = `translateX(${position}%)`;
        pagination?.querySelector('.active')?.classList.remove('active');
        pagination?.children[(slides.children.length + Math.floor(position / (100 / slides.children.length))) % slides.children.length].classList.add('active');
    }

    const prev = carousel.querySelector('.carousel-prev');
    const next = carousel.querySelector('.carousel-next');

    if (prev) {
        prev.innerHTML = '&lt;';
        prev?.addEventListener('click', () => {
            previousSlide();
        });
    }

    if (next) {
        next.innerHTML = '&gt;';
        next?.addEventListener('click', () => {
            nextSlide();
        });
    }


});