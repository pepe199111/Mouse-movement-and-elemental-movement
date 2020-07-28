document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.anim-bg');
    console.log(elements);

    document.addEventListener('mousemove', function (event) {
        const { clientX, clientY } = event;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        elements.forEach(el => {
            const ratioX = -el.getAttribute('ratioX');
            const ratioY = -el.getAttribute('ratioY');

            const moveX = clientX - centerX;
            const moveY = clientY - centerY;

            el.style.transform = `translate(${moveX * ratioX}px,${moveY * ratioY}px)`
        });
    });
});