//Select elements
const mainContainer = document.querySelector('.main-container')
const audio = document.querySelector('#audio')
const playButton = document.querySelector('#play-btn')
const prevButton = document.querySelector('#prev-btn')
const nextButton = document.querySelector('#next-btn')
const progressContainer = document.querySelector('.progress-container')
const progress = document.querySelector('.progress')
const musicTitle = document.querySelector('#music-title')
const musicCover = document.querySelector('#music-cover')

const songs = ['bird', 'flower', 'cat']

let songIndex = 0

function loadSong (song){
    audio.src = `music/${song}.mp3`
    musicTitle.innerText = song.charAt(0).toUpperCase() + song.slice(1);
    musicCover.src = `images/${song}.jpg`
}

loadSong(songs[songIndex])

function playSong (){

    audio.play()

    mainContainer.classList.add('play')
    playButton.querySelector('i.fas').classList.remove('fa-play')
    playButton.querySelector('i.fas').classList.add('fa-pause')
}

function pauseSong (){

    audio.pause()

    mainContainer.classList.remove('play')
    playButton.querySelector('i.fas').classList.add('fa-play')
    playButton.querySelector('i.fas').classList.remove('fa-pause')
}

function updateProgress (e){
    const { duration, currentTime } = e.srcElement
    const progressPercent = (currentTime / duration) * 100

    progress.style.width = `${progressPercent}%`
} 

function setProgress (e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}

playButton.addEventListener('click', function() {
    const isPlaying = mainContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})
function prevSong (){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])
    playSong()
}

function nextSong (){
    songIndex++

    if(songIndex > songs.length - 1){
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}

prevButton.addEventListener('click', prevSong)

nextButton.addEventListener('click', nextSong)

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)