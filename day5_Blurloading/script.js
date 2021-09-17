const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// increment counter 
let counter = 0;

//setinterval to increment 3 milliseconds 
let setInt = setInterval(blurring, 30);

//function to blur image
function blurring(){
    counter++
    if(counter > 99){
        clearInterval(setInt)
    }

    loadText.innerHTML = `${counter}%`;
    loadText.style.opacity = scale(counter, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(counter, 0, 100, 30, 0)}px)`
}
// returns max number and scales to desired int
const scale = (num, in_min, in_max, out_min, out_max) => {
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}