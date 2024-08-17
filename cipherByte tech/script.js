window.onload = () => {
    updateProgress('html-progress', 95);  // HTML skill level: 90%
    updateProgress('css-progress', 90);   // CSS skill level: 75%
    updateProgress('js-progress', 85);    // JavaScript skill level: 60%
    updateProgress('Bootstrap-progress', 80);    // JavaScript skill level: 60%
    updateProgress('Py-progress', 90);    // JavaScript skill level: 60%
};

function updateProgress(id, value) {
    const progressBar = document.getElementById(id);
    progressBar.style.width = value + '%';
    progressBar.innerHTML = value + '%';
}
