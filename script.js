//Select elements
const mainContainer = document.querySelector('.main-container')
const audio = document.querySelector('#audio')
const playButton = document.querySelector('.play-btn')
const prevButton = document.querySelector('.prev-btn')
const nextButton = document.querySelector('.next-btn')
const progressContainer = document.querySelector('.progress-container')
const progress = document.querySelector('.progress')
const musicTitle = document.querySelector('#music-title')
const musicCover = document.querySelector('#music-cover')

const songs = ['bird', 'flower', 'cat']

let songIndex = 2

function loadSong (song){
    audio.src = `music/${song}.mp3`
    musicTitle.innerText = song
    musicCover.src = `images/${song}.jpg`
}

loadSong(songs[songIndex])


