(() => {
    console.log('fired');
    const navMenu = document.querySelector('#mainNav');
    const burgerButton = document.querySelector('#burgerNav');
    const ham = document.querySelector('.ham');
    burgerButton.addEventListener('click', () => {
        navMenu.classList.toggle('opened');
        ham.classList.toggle('active');
        if (navMenu.classList.contains('opened')) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'scroll';
        }
    });

    // Skillset toggle functionality
    const skillToggles = document.querySelectorAll('.mySkills__skill--title');

    if (skillToggles.length > 0) {
        skillToggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                const skillset = toggle.nextElementSibling;
                const expandIcon = toggle.querySelector('#skillExpand');

                // Toggle active class for height and icon rotation
                skillset.classList.toggle('open');
                expandIcon.classList.toggle('rotated');
                expandIcon.textContent = skillset.classList.contains('open') ? '–' : '+';
            });
        });
    }

    // parallax effect for headings in .location section
    document.addEventListener('scroll', function () {
        const headings = document.querySelectorAll('.education h4');
        if (!headings.length) return; // Exit early if none are found
        const viewportHeight = window.innerHeight;
        const maxParallaxShift = 70; // in px
        headings.forEach((heading) => {
            const bounds = heading.getBoundingClientRect();
            // Only apply effect if the element is visible in the viewport
            if (bounds.top < viewportHeight && bounds.bottom > 0) {
                const scrollFraction = bounds.top / viewportHeight;
                const offset = (1 - scrollFraction) * maxParallaxShift;
                heading.style.backgroundPosition = `center ${-offset}px`;
            }
        });
    });

    // contact section subject selector
    document.addEventListener('DOMContentLoaded', () => {
        const radios = document.querySelectorAll('.contactPage__subjectSelect--option');
        const subjectField = document.querySelector('input[name="subject"]');

        if (!radios.length || !subjectField) return;

        radios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                document.querySelectorAll('.contactPage__subjectSelect--options label').forEach(label => {
                    label.classList.remove('active');
                });

                const label = e.target.closest('label');
                if (label) {
                    label.classList.add('active');
                }
                if (e.target.value !== 'other') {
                    subjectField.disabled = true;
                    subjectField.classList.add('disabled');
                    subjectField.value = e.target.value;
                } else {
                    subjectField.value = '';
                    subjectField.disabled = false;
                    subjectField.classList.remove('disabled');
                }
            });
        });
    });
})();