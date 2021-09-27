//need to select boxs
const boxes =  document.querySelectorAll('.box')

//eventlistener for scroll
window.addEventListener('scroll', checkBoxes)

function checkBoxes(){
    const triggerbottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top 

        if(boxTop < triggerbottom){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

checkBoxes() //invoke