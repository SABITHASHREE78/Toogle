document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('toggleButton');

    button.addEventListener('click', function () {
        if (button.classList.contains('on')) {
            button.classList.remove('on');
            button.classList.add('off');
            button.textContent = 'Off';
        } else {
            button.classList.remove('off');
            button.classList.add('on');
            button.textContent = 'On';
        }
    });
});
