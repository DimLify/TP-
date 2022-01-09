let start = document.getElementById("start");
let stop = document.getElementById("stop");
let pause = document.getElementById("pause");
let receivedMediaStream = null;

window.addEventListener('click', function(event) {
    var constraints = {
        audio: false,
        video: true
    };

    if (event.target.id == "start") {
        start.hidden = true;
        stop.hidden = false;
        canvasp.hidden = true;
        canvas.hidden = false;
        pause.hidden = false;
       
        var constraints = {
            audio: false,
            video: true
        };

        // media device access
        navigator.mediaDevices.getUserMedia(constraints)
            .then((mediaStream) => {
                var video = document.querySelector('video');
                video.srcObject = mediaStream;
                receivedMediaStream = mediaStream;

                video.onloadedmetadata = function loop() {
                    // loop and draw canvas while the video is playing
                    video.play();
                    if (video.play) {
                        canvas.width = 500;
                        canvas.height = 400;
                        var canvas = document.getElementById("canvas");
                        var ctx = canvas.getContext('2d');

                        ctx.drawImage(video, 0, 0);
                        setTimeout(loop, 1000 / 30); 
                    }
                };
            })
            .catch((err) => {
                console.log(err.name + ": " + err.message);
            }); 
    } else if (event.target.id == "stop") {
        start.hidden = false;
        stop.hidden = true;
        canvas.hidden = false;
        canvasp.hidden = true;

        // turn off the Webcam
        receivedMediaStream.getTracks().forEach(mediaTrack => {
            mediaTrack.stop();
        });
    } else if (event.target.id == "pause") {
        canvas.hidden = true;
        canvasp.hidden = false;
        start.hidden = false;
        stop.hidden = true;
        var video = document.querySelector('video');
        canvasp = document.getElementById("canvasp");

        // drawing a picture into canvas to make pause
        video.pause();
        canvasp.width = 500;
        canvasp.height = 400;
        var ctx = canvasp.getContext('2d');

        ctx.drawImage(video, 0, 0);
    }
})