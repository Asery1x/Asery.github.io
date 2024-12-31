document.addEventListener('contextmenu', (e)=>e.preventDefault());
function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
document.onkeydown = (e)=>{
    if (event.keyCode === 123 || ctrlShiftKey(e, 'I') || ctrlShiftKey(e, 'J') || ctrlShiftKey(e, 'C') || (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)))
        return false;
}
;
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach((question)=>{
    question.addEventListener('click', ()=>{
        const answer = question.nextElementSibling;
        const isExpanded = answer.classList.contains('show');
        if (isExpanded) {
            answer.style.maxHeight = '0';
            answer.classList.remove('show');
        } else {
            answer.classList.add('show');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    }
    );
}
);