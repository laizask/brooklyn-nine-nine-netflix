function toggleVideo() {
    const trailer = document.getElementById('trailer');
    trailer.classList.toggle('active');
    
    const video = document.getElementById('trailerVideo');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}
