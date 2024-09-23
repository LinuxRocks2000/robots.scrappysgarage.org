[!]
const video = document.querySelector(".backvideo > video");
if (video) {
    setInterval(() => {
        if (video.paused) {
            video.play();
        }
    }, 500);
}