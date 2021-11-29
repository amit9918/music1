let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
// bottom 
let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let updateTimer;

// toggle
 let dark = document.getElementById('dark');

let songs = [
    { songName: "Balaji Music (aisi deevangi)", filepath: "1.mp3", coverpath: "pic1.jpg" },
    { songName: "Sari ke fall se", filepath: "2.mp3", coverpath: "6.jpg" },
    { songName: "Gore rang pe na itna guman kar", filepath: "3.mp3", coverpath: "7.jpg" },
    { songName: "Phool tumhe bheja hai khat me", filepath: "4.mp3", coverpath: "19.jpg" },
    { songName: "Andekhi anjani si pagli si deevani si ", filepath: "5.mp3", coverpath: "14.jpg" },
    { songName: "Jay shree Ram jay shree Ram", filepath: "6.mp3", coverpath: "6.jpg" },
    { songName: "Mere bin sooni hai dil ki rahe", filepath: "7.mp3", coverpath: "7.jpg" },
    { songName: "saj ke jo tunio (panjabi song)", filepath: "8.mp3", coverpath: "22.jpg" },
    { songName: "Mujhse hi aj mujhko hi bhula de", filepath: "9.mp3", coverpath: "5.jpg" },
    { songName: "Patthar ke sanam tujhe", filepath: "10.mp3", coverpath: "7.jpg" },
    { songName: "Sari rat ahe bharta pal pal", filepath: "11.mp3", coverpath: "22.jpg" },
    { songName: "O dil ai mar jan gaya isq tu na krio", filepath: "12.mp3", coverpath: "pic1.jpg" },
    { songName: "Tum de rahi ho dil me dastak kisi", filepath: "13.mp3", coverpath: "11.jpg" },
    { songName: "Bhaithi hu intjar me ummeed", filepath: "14.mp3", coverpath: "7.jpg" },
    { songName: "Isq hai isq hai isq hai", filepath: "15.mp3", coverpath: "14.jpg" },
    { songName: "O pia o piya tumsa na ", filepath: "16.mp3", coverpath: "6.jpg" },
    { songName: "Koi fariyad tere dil me", filepath: "17.mp3", coverpath: "7.jpg" },
    { songName: "Bejan dil ko tere", filepath: "18.mp3", coverpath: "18.jpg" },
    { songName: "Hmne tumse tumne hmara", filepath: "19.mp3", coverpath: "19.jpg" },
]

songItems.forEach((element, i)=>{
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle-o');
        masterPlay.classList.add('fa-pause-circle-o');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle-o');
        masterPlay.classList.add('fa-play-circle-o');
        gif.style.opacity = 0;
        e.target.classList.add('fa-play-circle-o');
        e.target.classList.remove('fa-pause-circle-o');
       
    }
})


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle-o');
    element.classList.add('fa-play-circle-o');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
      if(audioElement.paused){
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        audioElement.src = `${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
          gif.style.opacity = 1;
          audioElement.play();
          e.target.classList.remove('fa-play-circle-o');
          e.target.classList.add('fa-pause-circle-o');
          masterPlay.classList.remove('fa-play-circle-o');
          masterPlay.classList.add('fa-pause-circle-o');   
      }
      else{
          audioElement.pause();
          e.target.classList.add('fa-play-circle-o');
          e.target.classList.remove('fa-pause-circle-o');
          masterPlay.classList.add('fa-play-circle-o');
          masterPlay.classList.remove('fa-pause-circle-o'); 
          gif.style.opacity = 0; 
      }
    })
  })

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=19){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle-o');
    masterPlay.classList.add('fa-pause-circle-o');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle-o');
    masterPlay.classList.add('fa-pause-circle-o');
})

dark.addEventListener('click', ()=>{
    if(dark.classList.contains('fa-toggle-off')){
        dark.classList.remove('fa-toggle-off');
        dark.classList.add('fa-toggle-on');
    }  
     else{
       
        dark.classList.remove('fa-toggle-on');
        dark.classList.add('fa-toggle-off');
    }
});

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
 
function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
    }

function seekTo() {
        // Calculate the seek position by the
        // percentage of the seek slider
        // and get the relative duration to the track
 seekto = audioElement.duration * (seek_slider.value / 100);
        
        // Set the current track position to the calculated seek position
  audioElement.currentTime = seekto;
}
        
function setVolume() {
        // Set the volume according to the
        // percentage of the volume slider set
 audioElement.volume = volume_slider.value / 100;
}
        
function seekUpdate() {
    let seekPosition = 0;
        
        // Check if the current track duration is a legible number
  if (!isNaN(audioElement.duration)) {
     seekPosition = audioElement.currentTime * (100 / audioElement.duration);
     seek_slider.value = seekPosition;
        
            // Calculate the time left and the total duration
     let currentMinutes = Math.floor(audioElement.currentTime / 60);
     let currentSeconds = Math.floor(audioElement.currentTime - currentMinutes * 60);
     let durationMinutes = Math.floor(audioElement.duration / 60);
     let durationSeconds = Math.floor(audioElement.duration - durationMinutes * 60);
        
            // Add a zero to the single digit time values
     if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
     if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
     if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
     if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }
        
            // Display the updated duration
     curr_time.textContent = currentMinutes + ":" + currentSeconds;
     total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}
updateTimer = setInterval(seekUpdate, 1000);