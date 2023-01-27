    let toggleButton = document.querySelector('#lightDark');
    let darkMode = localStorage.getItem('darkMode');
    const darkModeToggle = document.querySelector('#lightDarkToggle');

    const enableDarkMode = () => {
        document.body.classList.add('darkmode');
        toggleButton.querySelectorAll('.light').forEach(el => el.classList.remove('hidden'));
        localStorage.setItem('darkMode', 'enabled');
    }

    const disableDarkMode = () => {
        document.body.classList.remove('darkmode');
        toggleButton.querySelectorAll('.light').forEach(el => el.classList.add('hidden'));
        localStorage.removeItem('darkMode');
    }

    if (darkMode === 'enabled') {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('click', () => {
        darkMode = localStorage.getItem('darkMode');
        if (darkMode != 'enabled') {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    })
