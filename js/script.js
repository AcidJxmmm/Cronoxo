let video = document.querySelector ( '#product .player video' )
let controls = document.querySelector ( '#product .player .controls' )
let playButton = document.querySelector ( '#product .player .play' )
let pauseButton = document.querySelector ( '#product .player .pause' )
let fullScreen = document.querySelector ( '#product .player .fullscreen' )
let progress = document.querySelector ( '#product .player .progress' )
let progressBar = document.querySelector ( '#product .player .bar' )


playButton.addEventListener( 'click', playVideo);

function playVideo(event){
    video.play();
    playButton.classList.add( 'hidden' );
    pauseButton.classList.remove( 'hidden' );
}

pauseButton.addEventListener( 'click', pauseVideo);

function pauseVideo(event){
    video.pause();
    playButton.classList.remove( 'hidden' );
    pauseButton.classList.add( 'hidden' );
}

video.addEventListener( 'timeupdate', updateProgress);

function updateProgress(event){
    let progress = video.currentTime * 100 / video.duration;
    progressBar.style.width = progress + '%';
}

progress.addEventListener( 'click', setProgress);

function setProgress(event){
    let progress = event.offsetX / event.currentTarget.clientWidth;
    video.currentTime = progress * video.duration;
}

fullScreen.addEventListener( 'click', enterFullscreen);

function enterFullscreen(event){
    video.requestFullscreen();
}

document.addEventListener( 'fullscreenchange', checkFullsreen);

function checkFullsreen(event){
    if (document.fullscreenElement == video){
        video.style.objectFit = 'contain';
        if ( screen.orientation ) screen.orientation.lock( 'landscape' );
    } else {
        video.style.objectFit = "cover";
        if ( screen.orientation ) screen.orientation.unlock( 'landscape' );
    }    
}

function toggleControls(event) {
    if ( !controls.classList.contains( 'visible')) {
        event.preventDefault();
        controls.classList.add('visible');
    } else if (event.target == event.currentTarget) {
        controls.classList.remove('visisble');
    }
}