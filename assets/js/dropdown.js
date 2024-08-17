const faqs = document.querySelectorAll('.faq-item');

faqs.forEach((faq, i) => {
    const answer = faq.querySelector('.faq-answer');
    const question = faq.querySelector('.faq-question');

    const text = question.innerHTML;
    question.innerHTML = `<h3>${i + 1}. ${text}</h3><img src="/assets/imgs/arrow.png" class="dropdown-arrow">`;
    const arrow = question.querySelector('.dropdown-arrow');

    question.addEventListener('click', () => {
        arrow.style.transform = `rotate(${arrow.style.transform === 'rotate(180deg)' ? '0deg' : '180deg'})`;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});