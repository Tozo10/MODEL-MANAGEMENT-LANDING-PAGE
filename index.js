document.getElementById("dark-mode-toggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});


darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Save user preference in local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Apply dark mode if previously enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}
