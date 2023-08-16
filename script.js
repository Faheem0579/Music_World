console.log("Welcome to MusicWorld");

// Initialize The variables
let songIndex = 0;
let a = 0;
let nextSong;
let audioElement = new Audio('song/0.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Ae Dil Hai Mushkil", filePath: "song/Ae Dil Hai Mushkil.mp3", coverPath: "covers/Ae Dil Hai Mushkil.jpg" },
    { songName: "Alan Walker-Alone", filePath: "song/Alan Walker-Alone.mp3", coverPath: "covers/Alan Walker-Alone.jpg" },
    { songName: "On My Way", filePath: "song/On My Way.mp3", coverPath: "covers/On My Way.jpg" },
    { songName: "Musafir", filePath: "song/Musafir.mp3", coverPath: "covers/Musafir.jpg" },
    { songName: "Pehli Dafa", filePath: "song/Pehli Dafa.mp3", coverPath: "covers/Pehli Dafa.jpg" },
    { songName: "Tera Zikr - Darshan Raval", filePath: "song/Tera Zikr - Darshan Raval.mp3", coverPath: "covers/Tera Zikr - Darshan Raval.png" },
    { songName: "Kesariya", filePath: "song/Kesariya.mp3", coverPath: "covers/Kesariya.jpg" },
    { songName: "Ed Sheeran -Shape of You", filePath: "song/Ed Sheeran -Shape of You.mp3", coverPath: "covers/Ed Sheeran -Shape of You.jpg" },
    { songName: "Alan Walker - Faded", filePath: "song/Alan Walker - Faded.mp3", coverPath: "covers/Alan Walker - Faded.jpg" },
    { songName: "Alan Walker - The Spectre", filePath: "song/Alan Walker - The Spectre.mp3", coverPath: "covers/Alan Walker - The Spectre.jpg" },
]


songItems.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

// Handel play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //    console.log('timeupdate');
    //    Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})



//  For next and previous
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;

    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})