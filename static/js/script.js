function toggleMode() {
    const body = document.body;
    const modeSwitch = document.getElementById('modeSwitch');

    if (modeSwitch.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    }
}
