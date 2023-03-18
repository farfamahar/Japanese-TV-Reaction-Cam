// This function plays the video when the play button is clicked
function playVideo() {
  var video = document.getElementById("video");
  video.play();
  // Hide the play button after it has been clicked
  document.getElementById("play-button").style.display = "none";
}

// Get the user's webcam stream and display it in the video element
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(function (stream) {
    // Get the video element
    var video = document.getElementById("video");
    // Set the video source to the webcam stream
    video.srcObject = stream;
    // Play the video once it has loaded
    video.onloadedmetadata = function (e) {
      video.play();
    };
  })
  .catch(function (err) {
    console.log(err.name + ": " + err.message);
  });
