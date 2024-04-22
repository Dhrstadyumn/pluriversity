function resizeToFit() {
    let width = document.documentElement.clientWidth
    if (width >= 596) {
        const html = document.documentElement;
        html.style.transform = '';
    }
    else {
        const html = document.documentElement;
        const container = document.getElementById('page-container');
        let scale = width / container.offsetWidth;
        if (scale > 1) {
            scale = 1
        }
        html.style.transform = `scale(${scale})`
    }
}
window.addEventListener('DOMContentLoaded', resizeToFit);
window.addEventListener('resize', resizeToFit);