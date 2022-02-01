const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//Prompt to select media Stream, Pass to video Element, then play

async function selectMediaStream(){
  try{
    //Screen Capture API
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }

  } catch (error){
// Catch Error Here
console.log("Whoops, error here:", error)
  }
}
button.addEventListener('click', async() =>{
// Disable the button
button.disabled = true;
// Start Picture in Picture
await videoElement.requestPictureInPicture();
// Reset Button
button.disabled = false;
});

// On Load
selectMediaStream();