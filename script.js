document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const card = this.parentElement;
            const description = card.querySelector('.description');
            if (this.textContent === 'Read More') {
                description.textContent += ' Here is some additional content that was hidden before.';
                this.textContent = 'Read Less';
            } else {
                description.textContent = description.textContent.replace(' Here is some additional content that was hidden before.', '');
                this.textContent = 'Read More';
            }
        });
    });
});
