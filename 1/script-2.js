document.getElementById('help-link').addEventListener('click', function() {
    const helpOptions = document.getElementById('help-options');
    const arrow = document.querySelector('.arrow');

    if (helpOptions.classList.contains('hidden')) {
        helpOptions.classList.remove('hidden');
        arrow.innerHTML = '&#9660;'; // Downward arrow
    } else {
        helpOptions.classList.add('hidden');
        arrow.innerHTML = '&#9654;'; // Rightward arrow
    }
});

