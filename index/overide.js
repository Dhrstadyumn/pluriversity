function resizeToFit() {
    if (window.innerWidth <= 595) {
        const html = document.documentElement;
        const container = document.getElementById('page-container');
        let scale = window.innerWidth / container.offsetWidth;
        console.log(window.innerWidth)
        console.log(container.offsetWidth)
        console.log(scale)
        if (scale > 1) {
            scale = 1
        }
        // container.style.transform = `scale(${scale})`;
        html.style.transform = `scale(${scale})`
        container.style.left = `-${scale}px`
    }
    else {
        const container = document.getElementById('page-container');
        const html = document.documentElement;
        container.style.transform = '';
        container.style.left = '';
        html.style.transform = '';
    }
}

window.addEventListener('resize', resizeToFit);
resizeToFit();