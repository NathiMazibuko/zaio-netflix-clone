const videoPlayer = document.getElementById('trailer-player');
const carouselItems = document.querySelectorAll('.carousel-slide');

carouselItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const videoUrl = item.getAttribute('data-video');
        
        videoPlayer.src = videoUrl + '&enablejsapi=1&mute=1&autoplay=1';
});
})

// NOTE: I know we haven't officially covered JavaScript yet, I hope I'm not overstepping.
// But I wanted to challenge myself and make the video element a little more dynamic.
// I did a little research and found out about the EventListener method,
// which allows me to add an event listener for each carousel item that plays the trailer
// when a user hovers over it.