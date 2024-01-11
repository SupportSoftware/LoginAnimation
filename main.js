function Login() {
    var body = document.body;
    body.classList.toggle("opened");
}

function playVideo() {
    var video = document.getElementById("myVideo");
    video.muted = false;
    video.play().catch(error => {
        console.error("Autoplay was prevented:", error);
    });
}

window.onload = () => {
    var video = document.getElementById("myVideo");
    video.click();

    var audio = document.getElementById("myAudio");
    audio.play().catch(error => {
        console.error("Autoplay was prevented:", error);
    });
}