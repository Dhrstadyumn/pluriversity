function resizeToFit() {
    if (window.innerWidth <= 595) {
        const html = document.documentElement;
        const container = document.getElementById('page-container');
        let scale = window.innerWidth / container.offsetWidth;
        if (scale > 1) {
            scale = 1
        }
        html.style.transform = `scale(${scale})`
    }
    else {
        const container = document.getElementById('page-container');
        const html = document.documentElement;
        container.style.transform = '';
        container.style.left = '';
        html.style.transform = '';
    }
}

window.addEventListener('DOMContentLoaded', resizeToFit);
window.addEventListener('resize', resizeToFit);