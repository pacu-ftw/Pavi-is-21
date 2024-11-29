window.addEventListener('scroll', function() {
    const pages = document.querySelectorAll('.page');
    
    pages.forEach(page => {
        const pagePosition = page.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (pagePosition < windowHeight * 0.8) {
            page.classList.add('visible');
        }
    });
});

