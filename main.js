// get the url
var url = window.location.href;
// check if it is youtube
if (url.indexOf("youtube.com") > -1) {
    let currentSpeed = JSON.parse(sessionStorage.getItem('yt-player-playback-rate')).data
    if (currentSpeed !== "2") {
        sessionStorage.setItem('yt-player-playback-rate', JSON.stringify({
            data: String(2), creation: Date.now()
        }))
        console.log("Speed set to 2")
        location.reload()
    }
}