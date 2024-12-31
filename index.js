/* const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const isExpanded = answer.classList.contains('show');

    if (isExpanded) {
      answer.style.maxHeight = '0';
      answer.classList.remove('show');
    } else {
      answer.classList.add('show');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
}); */