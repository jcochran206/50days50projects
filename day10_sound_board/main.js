//create array 
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
//loop thru sounds, create element, create class, listener to play sound, display
sounds.forEach((sound) => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopSong() 
        document.getElementById(sound).play()
    })

   document.body.appendChild(btn);
}); 

function stopSong() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
    song.currentTime = 0;
    })
}
