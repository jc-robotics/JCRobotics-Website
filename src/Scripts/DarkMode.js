let DarkMode = false;

function ToggleDarkModeClass() {
    // Select the HTML element wit ID "ROOT"
    const root = document.getElementById('ROOT');
    
    if (DarkMode) {
        // Remove the class "dark" from the HTML element
        root.classList.remove('dark');
        DarkMode = false;
    } else {
        // Add the class "dark" to the HTML element
        root.classList.add('dark');
        DarkMode = true;
    }
}
