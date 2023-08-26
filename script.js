const bg = document.querySelector('.main-bg');
const loadingWrapper = document.querySelector('.loading-wrapper');
const loadingText = document.querySelector('.loading-text');

let loader = 0;
let count = setInterval(blurring, 30);

function blurring(){
    loader++;

    if(loader > 99){
        clearInterval(count);
    }

    loadingText.innerText = `${loader}%`;
    loadingText.style.opacity = scale(loader, 0, 100, 1, 0);
    loadingWrapper.style.opacity = scale(loader, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(loader, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}